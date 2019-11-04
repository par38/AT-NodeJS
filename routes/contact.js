const express = require('express')

const connection = require('../config/db')

const Router = express.Router()

// / http://localhost:8001/api/contact
// * GET FrContact

Router.get('/', (req, res) => {
  const contactData = 'SELECT company_name, address_street, address_city, tel, mail, linkedin FROM user WHERE id = 1;';
  // . console.log(contactData)

  connection.query(contactData, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;