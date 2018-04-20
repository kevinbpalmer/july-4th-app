const db = require('../db')

exports.create = function(firstName, lastName, email, phone) {
  const post = {
    firstName,
    lastName,
    email,
    phone
  }
  const sqlQuery = 'INSERT INTO potluck_participants SET ?'

  return new Promise((resolve, reject) => {
      db.query(sqlQuery, post, function (err, rows, fields) {
        if (err) {
          reject(err)
        }
        else {
          console.log('Saved potluck participant to the DB')
          console.log('ROWS: ', rows)
          console.log('FIELDS: ', fields)
          resolve('Saved potluck participant to the DB')
        }
      })
  })

}
