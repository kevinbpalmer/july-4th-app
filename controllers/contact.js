const express = require('express')
const router = express.Router()

const apiKey = process.env.MAILGUN_KEY
const domain = process.env.MAILGUN_DOMAIN
const mailgun = require('mailgun-js')({apiKey, domain})

// database model
const contactModel = require('../models/contact')

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

  if (!req.body.email) {
    return res.status(400).json('No email address provided')
  }

  if (!req.body.message) {
    return res.status(400).json('No volunteerType provided')
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    message
  } = req.body

  const data = {
    from: '<contact@harvest4thofjuly.com>',
    to: 'harvest4thofjuly@gmail.com',
    cc: 'kevin.bradley.palmer@gmail.com, farrahjean92@gmail.com',
    subject: 'New message from Harvest 4th of July Contact Form',
    text: `
      ${firstName} ${lastName} sent you a message. \n
      Phone number: ${phone} \n
      Email: ${email} \n
      Message: \n
      ${unescape(message)}`
  }

  contactModel.create(firstName, lastName, phone, email, message)
  .then(result => {
    console.log('Saved message to DB', result)
  })
  .catch(err => {
    console.log('Failed to save message to DB', err)
  })

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.error('ERROR SENDING MESSAGE: ', error)
      return res.status(400).json(error)
    }
    console.log('Message sent: ', body)
    res.status(200).json('Sent the email!')
  })
})

module.exports = router
