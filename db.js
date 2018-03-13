const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'harvest_db',
  database : 'harvest_db',
  password : 'root'
})

module.exports = connection
