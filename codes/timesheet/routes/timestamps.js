var express = require('express');
var router = express.Router();
var timestampController = require('../controllers/timestamp')

router.get('/:username/history', function(req, res, next) {
  let username = req.params.username
  timestampController.history(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

router.post('/:username/checkin', function(req, res, next) {
  let username = req.params.username
  timestampController.checkin(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

router.post('/:username/checkout', function(req, res, next) {
  let username = req.params.username
  timestampController.checkout(username).then(result => {
    res.status(200).send(result)
  }).catch(err => {
    res.status(500).send(err)
  })
})

module.exports = router;
