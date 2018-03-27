const express = require('express')
const router = express.Router()
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET_TOKEN)

// import data create method from the model
const payment = require('../../models/payment')

router.post('/', function(req, res, next) {
  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json('No data sent')
  }

  if (!req.body.stripeToken) {
    res.status(400).json('No token')
  }

  if (!req.body.amount) {
    console.log('AYYYY');
    return res.status(400).json('No amount')
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
      console.log(err)
      return res.status(400).json({
        error: {
          status: err.statusCode,
          message: err.message
        }
      })
    }

    payment.create(charge.amount, charge.created, charge.id, charge.source.name)
    return res.status(200).json('Success')
  })

})

module.exports = router
