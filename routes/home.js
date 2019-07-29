const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/api/home
// + GET 
// * image page home + alt
Router.get('/', (req, res) => {

  const homePicture = 'SELECT `media`.`picture_large`, `media`.`alt` FROM `media` WHERE (`media`.`landing_page` = 1);'

  connection.query(homePicture, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  })
})

module.exports = Router;
