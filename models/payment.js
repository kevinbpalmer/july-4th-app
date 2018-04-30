const db = require('../db')

exports.create = function(amount, created, transaction_id, name, error) {
  const post = {
    amount,
    created,
    transaction_id,
    name,
    error
  }
  const sqlQuery = 'INSERT INTO payments SET ?'

  db.query(sqlQuery, post, function (err, rows, fields) {
    if (err) {
      throw err
    }
    else {
      process.env.DEBUG && console.log('Saved payment success data to DB')
    }
  })
}


exports.getAmount = function() {
  const sqlQuery = 'SELECT * FROM payments WHERE error = 0;'

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
