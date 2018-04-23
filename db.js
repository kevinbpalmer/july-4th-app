const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
  user     : process.env.DB_USER ? process.env.DB_USER : 'harvest_db',
  database : process.env.DB_DATABASE ? process.env.DB_DATABASE : 'harvest_db',
  password : process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root'
})

module.exports = connection
