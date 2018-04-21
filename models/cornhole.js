const db = require('../db')

exports.create = function(data) {
  const {
    firstName,
    lastName,
    phoneNumber,
    teamName,
    partner,
    partnerFirstName,
    partnerLastName,
    boards
  } = data

  const post = {
    first_name: firstName,
    last_name: lastName,
    phone: phoneNumber,
    team_name: teamName,
    have_partner: partner === 'true' ? true : false,
    partner_first_name: partnerFirstName,
    partner_last_name: partnerLastName,
    num_boards: boards
  }


  const sqlQuery = 'INSERT INTO cornhole_players SET ?'

  return new Promise((resolve, reject) => {
    db.query(sqlQuery, post, function (err, rows, fields) {
      if (err) {
        reject(err)
      }
      else {
        console.log('Saved cornhole data to the DB')
        resolve('Saved cornhole data to the DB')
      }
    })
  })
}
