const db = require('../db')

exports.create = function(amount, created, transaction_id, name) {
  const post = {
    amount,
    created,
    transaction_id,
    name
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
