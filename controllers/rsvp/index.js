const express = require('express')
const router = express.Router()

const rsvp = require('../../models/rsvp')

router.post('/', function(req, res, next) {
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json('No data sent')
  }

  if (!req.body.firstName) {
    res.status(400).json('No firstName')
  }

  if (!req.body.lastName) {
    return res.status(400).json('No lastName')
  }

  if (!req.body.address) {
    return res.status(400).json('No address')
  }

  if (!req.body.preferredComm) {
    return res.status(400).json('No communication type selected')
  }

  rsvp.create(req.body)
  return res.status(200).json('Success')
})

module.exports = router
