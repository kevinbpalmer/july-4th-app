const express = require('express')
const router = express.Router()

const apiKey = process.env.MAILGUN_KEY
const domain = process.env.MAILGUN_DOMAIN
const mailgun = require('mailgun-js')({apiKey, domain})

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
    process.env.DEBUG && console.log(result)
    const data = {
      from: '<contact@harvest4thofjuly.com>',
      to: 'harvest4thofjuly@gmail.com',
      cc: 'kevin.bradley.palmer@gmail.com',
      subject: 'New volunteer signup on Harvest 4th',
      text: `
        Volunteer Name: ${firstName} ${lastName} \n
        Committee: ${volunteerType}`
    }

    mailgun.messages().send(data, function (error, body) {
      if (error) {
        process.env.DEBUG && console.error('ERROR SENDING MESSAGE: ', error)
        return res.status(400).json(error)
      }
      process.env.DEBUG && console.log('Message sent: ', body)
      res.status(200).json('Sent the email!')
    })

    res.status(200).json('Successfully signed up to volunteer')
  })
  .catch(err => {
    process.env.DEBUG && console.error(err)
    res.status(400).json('Failed to sign up to volunteer')
  })
})

module.exports = router
