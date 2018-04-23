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
const cornhole = require('./controllers/cornhole')
const volunteer = require('./controllers/volunteer')
const contact = require('./controllers/contact')

app.use(apiPrefix + '/rsvp', rsvp)
app.use(apiPrefix + '/payment', payment)
app.use(apiPrefix + '/potluck', potluck)
app.use(apiPrefix + '/cornhole', cornhole)
app.use(apiPrefix + '/volunteer', volunteer)
app.use(apiPrefix + '/contact', contact)

app.use(express.static(path.join(__dirname, 'dist/index.html')))
app.get('*', function(req, res) {
    console.log('HERE')
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

// Unhandled errors go here
app.use(function(err, req, res, next) {
  var error = err || {}
  console.log('FINAL ERROR HANDLER: ', error.message)

  res.status(error.status || 500)
  return res.json({ message: error.message || 'Something went wrong'})
})

app.listen(PORT, function(error) {
  return (
    error
      ? console.error(error)
      : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
  )
})
