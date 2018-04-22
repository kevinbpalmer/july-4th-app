const express = require('express')
const router = express.Router()

const volunteerModel = require('../models/volunteer')

router.post('/', function (req, res, next) {
  // Token is created using Checkout or Elements! Get the payment token ID submitted by the form:
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json('No data sent')
  }

  if (!req.body.firstName) {
    res.status(400).json('No firstName provided')
  }

  if (!req.body.lastName) {
    return res.status(400).json('No lastName provided')
  }

  if (!req.body.phone) {
    return res.status(400).json('No phone number provided')
  }

  if (!req.body.volunteerType) {
    return res.status(400).json('No volunteerType provided')
  }

  const {
    firstName,
    lastName,
    phone,
    volunteerType
  } = req.body

  volunteerModel.create(firstName, lastName, phone, volunteerType)
  .then(result => {
    console.log(result)
    res.status(200).json('Successfully signed up to volunteer')
  })
  .catch(err => {
    console.error(err)
    res.status(400).json('Failed to sign up to volunteer')
  })
})

module.exports = router
