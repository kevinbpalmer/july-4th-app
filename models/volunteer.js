const db = require('../db')

exports.getCountOfVolunteerTypes = function() {
  const sqlQuery = "SELECT * FROM (SELECT count(volunteer_type) AS fireworks_friday FROM `volunteers` WHERE `volunteer_type` = 'Fireworks-Friday') AS fireworks_friday JOIN (SELECT count(volunteer_type) AS fireworks_saturday FROM `volunteers` WHERE `volunteer_type` = 'Fireworks-Saturday') AS fireworks_saturday JOIN (SELECT count(volunteer_type) AS potluck FROM `volunteers` WHERE `volunteer_type` = 'Potluck') AS potluck JOIN (SELECT count(volunteer_type) AS cornhole FROM `volunteers` WHERE `volunteer_type` = 'Cornhole') AS cornhole JOIN (SELECT count(volunteer_type) AS name_tag FROM `volunteers` WHERE `volunteer_type` = 'Name Tag') AS name_tag JOIN (SELECT count(volunteer_type) AS parade FROM `volunteers` WHERE `volunteer_type` = 'Parade') AS parade JOIN (SELECT count(volunteer_type) AS cleanup FROM `volunteers` WHERE `volunteer_type` = 'Clean Up') AS cleanup"


    return new Promise((resolve, reject) => {
        db.query(sqlQuery, function (err, results) {
          if (err) {
            process.env.DEBUG && console.error(err)
            reject(err)
          }
          else {
            resolve(results)
          }
        })
    })
}

exports.create = function(firstName, lastName, phone, volunteerType) {
  const post = {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    volunteer_type: volunteerType
  }
  const sqlQuery = 'INSERT INTO volunteers SET ?'

  return new Promise((resolve, reject) => {
      db.query(sqlQuery, post, function (err, results) {
        if (err) {
          process.env.DEBUG && console.error(err)
          reject(err)
        }
        else {
          resolve('Successfully saved volunteer to DB')
        }
      })
  })
}
