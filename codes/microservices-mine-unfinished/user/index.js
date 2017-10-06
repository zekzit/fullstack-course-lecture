const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const service = require('./service.js')

const app = express()

app.use(bodyParser.json())

// อ่าน Token จาก Request Header
const tokenParser = (req, res, next) => {
    const token = req.header('authorization')
    // Authorization: Bearer <TOKEN>
    const splittedToken = token.split(' ')
    if(tk.length !== 2) {
        res.status(401).json( { error: 'invalid token' })
        return
    }
    if(tk[0].toLowerCase !== 'bearer') {
        res.status(401).json( { error: 'invalid token' })
        return
    }
    const jwtToken = jwt.verify(tk[1], 'secret')
    // if(jwtToken.type)
    

    req.token = {
        userId: jwtToken.userId,
        scope: jwtToken.scope
    }
    next()
}

const verifyScope = (token, scope)

const adminRouter = express.Router()
adminRouter.get('/user', (req,res) => {
    if(req.token.scope != 'admin') {
        res.status(401).json({ error: 'admin only jaa' })
    }
    service.findAllUsers()
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err }))
})

adminRouter.get('/user/:id', (req,res) => {
    service.findUserById(req.param('id'))
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err }))
})

app.use()

const onlyAdmin = (req, res, next) => {
    next()
}

app.use('/admin', onlyAdmin)
app.use('/admin', adminRouter)

app.listen(3001, () => console.log('user service running at port 3001'))