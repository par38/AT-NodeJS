const http = require('http');
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

//+const nomRoute = require('./routes/nom')

// je configure l'application
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

//+ app.use('/adresseBarreDeRecherche', nomRoute)
//+ // où nomRoute a été importé

// en cas de route non trouvée, code 404 'Not found'
// app.use(function(req, res, next) {
//   const err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// serveur node
let server = app.listen(process.env.PORT || 3030, function () {
  console.log('Listening on port ' + server.address().port);        //*voir si pas PORT majuscule ?
})