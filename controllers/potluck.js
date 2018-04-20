const express = require('express')
const router = express.Router()

const potluckParticipants = require('../../models/rsvp')

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

  if (!req.body.email) {
    return res.status(400).json('No address')
  }

  if (!req.body.phone) {
    return res.status(400).json('No phone number')
  }

  console.log('POTLUCK DATA: ', req.body)
  potluckParticipants.create(req.body.firstName, req.body.lastName, req.body.email, req.body.phone)
})

module.exports = router


// potluck.create(req.body)
// .then(result => {
//   return res.status(200).json('Successfully signed up for the potluck')
// })
// .catch(err => {
//   return res.status(400).json({
//     error: {
//       status: 400,
//       message: err
//     }
//   })
// })
