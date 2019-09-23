const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/api/details/1
// * GET projet détaillé par id, avec clients, partners, médias (order by) et crédits

Router.get('/:id(\\d{1,2})', (req, res) => {
  const detailsProject = 'SELECT p.*, cl.client_name, pa.partner_name, m.alt, m.description, m.main, m.picture_large, m.media_order, m.media_published, cr.credit FROM projects AS p LEFT JOIN projects_has_clients AS phc ON p.project_id = phc.projects_id_has_clients LEFT JOIN clients AS cl ON phc.clients_id_has_projects = cl.client_id LEFT JOIN projects_has_partners AS php ON p.project_id = php.projects_id_has_partners LEFT JOIN partners AS pa ON php.partners_id_has_project = pa.partner_id LEFT JOIN media AS m ON p.project_id = m.projects_id LEFT JOIN media_has_credits AS mhc ON m.media_id = mhc.media_id_has LEFT JOIN credits AS cr ON cr.credit_id = mhc.credits_id_has WHERE ((p.project_id = ?) AND (p.project_published =1)) ORDER BY m.media_order;';
  // .console.log(detailsProject)

  const projectLink = req.params.id;
  // . console.log(projectLink)

  // const regexId = /[\s\\.,:;?!\-_€$]/gi;
  //const projectsTitle = idProject.toLowerCase().replace(regexId, "-").concat("/").concat(id)
  //const projectRedux = /\/\d{1,2}/
  //const projectId = idProject.slice(projectRedux)



  //connection.query(detailsProject, projectsTitle, (err, result) => {
  connection.query(detailsProject, projectLink, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

module.exports = Router;
