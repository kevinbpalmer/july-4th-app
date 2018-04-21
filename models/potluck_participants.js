const db = require('../db')

exports.create = function(firstName, lastName, email, phone) {
  const post = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone
  }
  const sqlQuery = 'INSERT INTO potluck_participants SET ?'

  return new Promise((resolve, reject) => {
      db.query(sqlQuery, post, function (err, results) {
        if (err) {
          console.error(err)
          reject(err)
        }
        else {
          console.log('RESULTS: ', results.insertId)
          resolve(results.insertId)
        }
      })
  })

}
