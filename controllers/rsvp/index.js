const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  console.log('TEST')

  res.json('TEST WORKS')
})

router.post('/', function(req, res, next) {
  console.log('received data: ', req.body)

  res.json('TEST WORKS')
})

module.exports = router
