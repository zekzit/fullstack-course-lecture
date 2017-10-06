const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const service = require('./service')

const app = express()

app.use(bodyParser.json())

const tokenParser = (req, res, next) => {
  const token = req.header('authorization')

  if (!token) {
    next()
    return
    // res.status(401).json({ error: 'invalid token' })
    // return
  }

  // Authorization: Bearer TOKEN
  const tk = token.split(' ')
  if (tk.length !== 2) {
    res.status(401).json({ error: 'invalid token' })
    return
  }
  if (tk[0].toLowerCase() !== 'bearer') {
    res.status(401).json({ error: 'invalid token' })
    return
  }

  // check jwt token
  try {
    const jwtToken = jwt.verify(tk[1], 'secret')
    if (jwtToken.type !== 'access_token') {
      res.status(401).json({ error: 'invalid token' })
      return
    }

    req.token = {
      userId: jwtToken.userId,
      scope: jwtToken.scope
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }

  next()
}

app.use(tokenParser)

// const adminRouter = express.Router()

app.get('/user', (req, res) => {
  if (!req.token || req.token.scope !== 'admin') {
    res.status(401).json({ error: 'forbidden' })
    return
  }
  service.findAllUsers()
    .then((result) => { res.json(result) })
    .catch((err) => { res.status(500).json({ error: err }) })
})

app.get('/user/:id', (req, res) => {
  const userId = req.param('id')
  if (!req.token || req.token.scope !== 'admin' || req.token.userId != userId) {
    res.status(401).json({ error: 'forbidden' })
    return
  }
  service.findUserById(userId)
    .then((result) => { res.json(result) })
    .catch((err) => { res.status(500).json({ error: err }) })
  })

// const onlyAdmin = (req, res, next) => {
//   next()
// }

// app.use('/admin', onlyAdmin, adminRouter)

app.listen(4000)
