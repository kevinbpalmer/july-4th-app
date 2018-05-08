require('dotenv').load()
const https = require('https')
const fs = require('fs')
const path = require('path')
const compression = require('compression')
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
const expressSanitized = require('express-sanitize-escape')
const db = require('./db.js')
const http = require('http')
// const helmet = require('helmet')

// logging
const morgan = require('morgan')
const winston = require('./winston')

const app = express()

// app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(expressSanitized.middleware())

// configure logging
app.use(morgan('combined', { stream: winston.stream }))

// simple query to make sure the connection worked
db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) {
    throw err
  }
  else {
    process.env.DEBUG && console.log('DB connected')
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

app.use('/', express.static('build'))
app.get('/*', function(req, res){

  res.sendFile(__dirname + '/build/index.html')
})

// Unhandled errors go here
app.use(function(err, req, res, next) {
  var error = err || {}
  process.env.DEBUG && console.log('FINAL ERROR HANDLER: ', error.message)

  res.status(error.status || 500)
  return res.json({ message: error.message || 'Something went wrong'})
})

const env = process.env.NODE_ENV
if (env === 'production') {
  const options = {
          cert: fs.readFileSync('./sslcert/fullchain.pem'),
          key: fs.readFileSync('./sslcert/privkey.pem')
  }
  http.createServer(function (req, res) {
      res.writeHead(301, { "Location": "https://" + req.headers['host'].replace(/^www\./, '') + req.url.replace(/^www\./, '') })
      res.end()
  }).listen(80)
  https.createServer(options, app).listen(443)
}
else {
  app.listen(PORT, function(error) {
    return (
      error
        ? console.error(error)
        : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
    )
  })
}
