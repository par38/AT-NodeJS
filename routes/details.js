const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/api/details/1
// * GET projet détaillé par id, avec clients, partners, médias (order by) et crédits
Router.get('/:id(\\d{1,2})', (req, res) => {
  const detailsProject = 'SELECT p.*, cl.client_name, pa.partner_name, m.alt, m.description, m.main, m.picture_large, m.media_order, cr.credit FROM projects AS p LEFT JOIN projects_has_clients AS phc ON p.id = phc.projects_id LEFT JOIN clients AS cl ON phc.clients_id = cl.id LEFT JOIN projects_has_partners AS php ON p.id = php.projects_id LEFT JOIN partners AS pa ON php.partners_id = pa.id LEFT JOIN media AS m ON p.id = m.projects_id LEFT JOIN media_has_credits AS mhc ON m.id = mhc.media_id LEFT JOIN credits AS cr ON cr.id = mhc.credits_id WHERE p.id = 1 ORDER BY m.media_order ;';

  const projectLink = req.params.id;
  // console.log(projectLink)
  // const regexId = /[\s\\.,:;?!\-_€$]/gi;
  //const projectsTitle = idProject.toLowerCase().replace(regexId, "-").concat("/").concat(id)
  //const projectRedux = /\/\d{1,2}/
  //const projectId = idProject.slice(projectRedux)
  //console.log(projectId)
  
  

  //connection.query(detailsProject, projectsTitle, (err, result) => {
  connection.query(detailsProject, projectLink, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;
