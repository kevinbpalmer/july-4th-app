const express = require('express')
const router = express.Router()

const potluckParticipants = require('../models/potluck_participants')
const potluckDishes = require('../models/potluck_dishes')

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

  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const phone = req.body.phone
  const arrayOfDishes = req.body.potluckDishes

  potluckParticipants.create(firstName, lastName, email, phone)
  .then(id => {
    saveDish(arrayOfDishes, id)
    .then(result => {
      res.status(200).json('Sucessfully saved participant and user to DB')
    })
    .catch(err => {
      res.status(400).json('Failed to save dish')
    })
  })
  .catch(err => {
    console.error(err)
    res.status(400).json('Failed to save participant')
  })
})

module.exports = router

function saveDish(dishes, id) {

  return new Promise(function(resolve, reject) {
    console.log('DISHES LENGTH: ', dishes.length);

    for (var i = 0; i < dishes.length; i++) {
      const isOther = dishes[i].value
      const otherVal = dishes[i].otherVal

      const category = dishes[i].subDish.name
      const type = dishes[i].subDish.value

      if (isOther === 'other') {
        resolve(potluckDishes.create(id, 'other', 'other', otherVal))
      }
      else if (type === 'other') {
        resolve(potluckDishes.create(id, category, type, otherVal))
      }
      else {
        resolve(potluckDishes.create(id, category, type, otherVal))
      }
    }
  });

}


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
