const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/details/1
// GET projet détaillé par id
Router.get('/:id', (req, res) => {
  const detailsProject = 'SELECT p.*, cl.name, m.alt, m.description, m.main, m.picture_large, m.order, pa.name FROM projects AS p LEFT JOIN projects_has_clients AS phc ON p.id = phc.projects_id LEFT JOIN clients AS cl ON phc.clients_id = cl.id LEFT JOIN media AS m ON p.id = m.projects_id LEFT JOIN projects_has_partners AS php ON p.id = php.projects_id LEFT JOIN partners AS pa ON php.partners_id = pa.id WHERE p.id = ? ORDER BY m.order;';
  const idProject = req.params.id;
  connection.query(detailsProject, idProject, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;
