const db = require('../db')

exports.create = function(data) {
  const {
    firstName,
    lastName,
    address,
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
    first_name: firstName,
    last_name: lastName,
    address,
    email,
    phone,
    attending_lunch: attendingLunch,
    num_lunch_adults: lunchNumAdults,
    num_lunch_kids: lunchNumKids,
    attending_potluck: attendingPotluck,
    num_potluck_adults: potluckNumAdults,
    num_potluck_kids: potluckNumKids
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
