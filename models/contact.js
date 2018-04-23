const db = require('../db')

exports.create = function(first_name, last_name, phone, email, message) {
  const post = {
    first_name,
    last_name,
    phone,
    email,
    message
  }
  const sqlQuery = 'INSERT INTO contact_messages SET ?'

  return new Promise((resolve, reject) => {
      db.query(sqlQuery, post, function (err, results) {
        if (err) {
          console.error(err)
          reject(err)
        }
        else {
          resolve(results)
        }
      })
  })

}
