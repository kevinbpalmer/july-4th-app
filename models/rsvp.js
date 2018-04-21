const db = require('../db')

exports.create = function(data) {
  const {
    firstName,
    lastName,
    address,
    preferredComm,
    email,
    phone,
    attendingLunch,
    lunchNumAdults,
    lunchNumKids,
    attendingPotluck,
    potluckNumAdults,
    potluckNumKids
  } = data

  const post = {
    firstName,
    lastName,
    address,
    preferredComm,
    email,
    phone,
    attendingLunch,
    lunchNumAdults,
    lunchNumKids,
    attendingPotluck,
    potluckNumAdults,
    potluckNumKids
  }
  const sqlQuery = 'INSERT INTO rsvps SET ?'

  return new Promise((resolve, reject) => {
    db.query(sqlQuery, post, function (err, rows, fields) {
      if (err) {
        reject(err)
      }
      else {
        console.log('Saved rsvp data to the DB')
        resolve('Saved rsvp data to the DB')
      }
    })
  })
}
