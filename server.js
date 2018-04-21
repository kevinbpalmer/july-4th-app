require('dotenv').load()
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
const expressSanitized = require('express-sanitize-escape')
const db = require('./db.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(expressSanitized.middleware())
app.use(express.static(path.join(__dirname, 'frontend/build')))

// simple query to make sure the connection worked
db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) {
    throw err
  }
  else {
    console.log('DB connected')
  }
})

const apiPrefix = '/api/v1'

// controllers
const rsvp = require('./controllers/rsvp')
const payment = require('./controllers/payment')
const potluck = require('./controllers/potluck')

app.use(apiPrefix + '/rsvp', rsvp)
app.use(apiPrefix + '/payment', payment)
app.use(apiPrefix + '/potluck', potluck)

app.listen(PORT, function(error) {
  return (
    error
      ? console.error(error)
      : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
  )
})
