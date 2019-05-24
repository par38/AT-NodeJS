const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();

const app = express()

// liste des routes
const indexRoutes = require('./routes/indexRoutes')

// je configure l'application
app.use(morgan('dev'))
app.use(cors())

// permet d'utiliser req.body et req.params dans les routes
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRoutes)

app.use(express.static(__dirname + '/public'))

// serveur node
let server = app.listen(process.env.PORT || 8001, function () {
  console.log('Listening on port ' + server.address().port);
})