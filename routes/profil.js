const express = require('express')
const connection = require('../config/db')

const Router = express.Router()

// / http://localhost:8001/api/profil
// * GET PageFrProfil FrProfil 
Router.get('/', (req, res) => {

  const profilData = 'SELECT * FROM profil ORDER BY profil_order_fr;';
  // . console.log(profilData)

  connection.query(profilData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;