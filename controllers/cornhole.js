const express = require('express')
const router = express.Router()

const cornhole = require('../models/cornhole')

router.post('/', function (req, res, next) {
  // Token is created using Checkout or Elements! Get the payment token ID submitted by the form:
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json('No data sent')
  }

  if (!req.body.firstName) {
    res.status(400).json('No firstName')
  }

  if (!req.body.lastName) {
    return res.status(400).json('No lastName')
  }

  if (!req.body.phoneNumber) {
    return res.status(400).json('No address')
  }

  if (!req.body.partner) {
    return res.status(400).json('Please indicate if user has a partner')
  }

  cornhole.create(req.body)
  .then(result => {
    console.log('Successfully saved data to cornhole db')
    res.status(200).json('Success!')
  })
  .catch(err => {
    console.error('Cornhole model error: ', err)
    res.status(400).json(err)
  })
})

module.exports = router
