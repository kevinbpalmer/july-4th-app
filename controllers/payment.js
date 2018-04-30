const express = require('express')
const router = express.Router()
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.NODE_ENV === 'production' ? process.env.STRIPE_SECRET_TOKEN_PROD : process.env.STRIPE_SECRET_TOKEN_DEV)

// import data create method from the model
const payment = require('../models/payment')

router.get('/', function(req, res, next) {
  payment.getAmount()
  .then(result => {
    return res.status(200).json(result[0])
  })
  .catch(error => {
    return res.status(400).json(error)
  })
})

router.post('/', function(req, res, next) {
  // Token is created using Checkout or Elements!
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json('No data sent')
  }

  // Get the payment token ID from stripe that is submitted through the form
  if (!req.body.stripeToken) {
    res.status(400).json('No token')
  }

  if (!req.body.amount) {
    return res.status(400).json('No amount')
  }

  if (req.body.amount.length > 6) {
    return res.status(400).json('Amount must be 6 characters or less')
  }

  const token = req.body.stripeToken
  const amount = req.body.amount

  // Charge the user's card:
  stripe.charges.create({
    amount: amount,
    currency: 'usd',
    description: 'Harvest 4th donation page',
    source: token.id,
  }, function(err, charge) {
    if (err) {
      process.env.DEBUG && console.log('ERR: ', err.message)
      payment.create(amount, Date.now(), null, token.card.name, true)
      return res.status(400).json({message: err.message})
    }
    process.env.DEBUG && console.log('Made a charge to stripe: ', charge)

    payment.create(charge.amount, charge.created, charge.id, charge.source.name, false)
    return res.status(200).json('Success')
  })

})

module.exports = router
