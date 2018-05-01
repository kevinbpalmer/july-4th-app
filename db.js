const mysql = require('mysql')
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'harvest_db',
  database : 'harvest_db',
  password : 'dev'
})

setInterval(function () {
    connection.query('SELECT 1')
}, 5000);

module.exports = connection
