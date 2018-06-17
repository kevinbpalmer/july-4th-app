require('dotenv').load()
const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  database : process.env.DB_DATABASE,
  password : process.env.DB_PASSWORD
})

setInterval(function () {
    connection.query('SELECT 1')
}, 5000);

module.exports = connection
