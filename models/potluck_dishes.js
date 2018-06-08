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
  const sqlQuery = "SELECT * FROM (SELECT count(type) AS veggieTray FROM `potluck_dishes` WHERE `type` = 'veggieTray') AS veggieTray JOIN (SELECT count(type) AS fruitTray FROM `potluck_dishes` WHERE `type` = 'fruitTray') AS fruitTray JOIN (SELECT count(type) AS chipsAndDip FROM `potluck_dishes` WHERE `type` = 'chipsAndDip') AS chipsAndDip JOIN (SELECT count(type) AS fingerSandwiches FROM `potluck_dishes` WHERE `type` = 'fingerSandwiches') AS fingerSandwiches JOIN (SELECT count(type) AS meat FROM `potluck_dishes` WHERE `type` = 'meat') AS meat JOIN (SELECT count(type) AS other_appetizer FROM `potluck_dishes` WHERE `type` = 'other' AND `category` = 'appetizer') AS other_appetizer JOIN (SELECT count(type) AS macaroniAndCheese FROM `potluck_dishes` WHERE `type` = 'macaroniAndCheese') AS macaroniAndCheese JOIN (SELECT count(type) AS bakedBeans FROM `potluck_dishes` WHERE `type` = 'bakedBeans') AS bakedBeans JOIN (SELECT count(type) AS potatoDish FROM `potluck_dishes` WHERE `type` = 'potatoDish') AS potatoDish JOIN (SELECT count(type) AS salad FROM `potluck_dishes` WHERE `type` = 'salad') AS salad JOIN (SELECT count(type) AS coleslaw FROM `potluck_dishes` WHERE `type` = 'coleslaw') AS coleslaw JOIN (SELECT count(type) AS other_side_dish FROM `potluck_dishes` WHERE `type` = 'other' AND `category` = 'sideDish') AS other_side_dish JOIN (SELECT count(type) AS cake FROM `potluck_dishes` WHERE `type` = 'cake') AS cake JOIN (SELECT count(type) AS brownies FROM `potluck_dishes` WHERE `type` = 'brownies') AS brownies JOIN (SELECT count(type) AS cookies FROM `potluck_dishes` WHERE `type` = 'cookies') AS cookies JOIN (SELECT count(type) AS pie FROM `potluck_dishes` WHERE `type` = 'pie') AS pie JOIN (SELECT count(type) AS salad FROM `potluck_dishes` WHERE `type` = 'salad') AS other JOIN (SELECT count(type) AS other_dessert FROM `potluck_dishes` WHERE `type` = 'other' AND `category` = 'dessert') AS other_dessert JOIN (SELECT count(type) AS coke_pepsi FROM `potluck_dishes` WHERE `type` = 'coke/Pepsi') AS coke_pepsi JOIN (SELECT count(type) AS sprite FROM `potluck_dishes` WHERE `type` = 'sprite') AS sprite JOIN (SELECT count(type) AS dietCoke FROM `potluck_dishes` WHERE `type` = 'dietCoke') AS dietCoke JOIN (SELECT count(type) AS drPepper FROM `potluck_dishes` WHERE `type` = 'drPepper') AS drPepper JOIN (SELECT count(type) AS juice FROM `potluck_dishes` WHERE `type` = 'juice') AS juice JOIN (SELECT count(type) AS tea FROM `potluck_dishes` WHERE `type` = 'tea') AS tea JOIN (SELECT count(type) AS other_drinks FROM `potluck_dishes` WHERE `type` = 'other' AND category='drinks') AS other_drinks JOIN (SELECT count(type) AS other_general FROM `potluck_dishes` WHERE `type` = 'other' AND category = 'other') AS other_general JOIN (SELECT count(type) AS napkins FROM `potluck_dishes` WHERE `type` = 'napkins' AND category = 'other') AS napkins JOIN (SELECT count(type) AS soloCups FROM `potluck_dishes` WHERE `type` = 'soloCups' AND category = 'other') AS soloCups JOIN (SELECT count(type) AS plasticForks FROM `potluck_dishes` WHERE `type` = 'plasticForks' AND category = 'other') AS plasticForks JOIN (SELECT count(type) AS plasticSpoons FROM `potluck_dishes` WHERE `type` = 'plasticSpoons' AND category = 'other') AS plasticSpoons JOIN (SELECT count(type) AS threeSectionPlates FROM `potluck_dishes` WHERE `type` = 'threeSectionPlates' AND category = 'other') AS threeSectionPlates;"

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
