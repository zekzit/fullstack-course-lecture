var express = require('express')
var router = express.Router()
var authController = require('../controllers/auth')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Workshop - Timestamp API'
  })
})

router.post('/login', function (req, res, next) {

  let username = req.body.username
  let password = req.body.password

  authController.authenticateUser(username, password).then(result => {
    res.status(result.status).send(result.payload)
  }).catch(err => {
    res.status(500).send(err)
  })
})


module.exports = router