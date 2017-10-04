var express = require('express');
var router = express.Router();
var timestampController = require('../controllers/timestamp')

router.get('/', function(req, res, next) {
  let username = req.currentUser.username
  timestampController.history(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

router.post('/checkin', function(req, res, next) {
  let username = req.currentUser.username
  timestampController.checkin(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

router.post('/checkout', function(req, res, next) {
  let username = req.currentUser.username
  timestampController.checkout(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

module.exports = router;
