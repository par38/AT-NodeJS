const express = require('express')
const connection = require('../config/db')

const Router = express.Router()

// / http://localhost:8001/api/publications
// * GET PageFrPublications FrPublications 
Router.get('/', (req, res) => {
  
  const publicationsData = 'SELECT * FROM biblio ORDER BY biblio_order;';

  connection.query(publicationsData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;