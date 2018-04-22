const db = require('../db')

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
          console.error(err)
          reject(err)
        }
        else {
          resolve('Successfully saved volunteer to DB')
        }
      })
  })
}
