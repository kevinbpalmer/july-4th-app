const db = require('../db')

exports.create = function(participantId, category, type, other) {
  const post = {
    potluck_user_id: participantId,
    category,
    type,
    other
  }
  const sqlQuery = 'INSERT INTO potluck_dishes SET ?'

  return new Promise((resolve, reject) => {
      db.query(sqlQuery, post, function (err, results) {
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

exports.getDishes = function() {
  const sqlQuery = 'SELECT * FROM potluck_dishes;'

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

exports.getDishesByCategory = function(category, type) {
  const sqlQuery = `SELECT * FROM potluck_dishes WHERE category = '${category} AND type = '${type}'';`

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
