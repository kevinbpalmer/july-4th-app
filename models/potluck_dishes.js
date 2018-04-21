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
          console.error(err)
          reject(err)
        }
        else {
          resolve(results)
        }
      })
  })

}
