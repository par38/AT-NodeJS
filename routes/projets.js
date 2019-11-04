const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/api/projets
// * GET FrProjetsCardsAxios et FrProjetsCardsM
// * main, small picture, city, title + ids (projets + media)
// / attention : indiquer seulement '/', car s'ajoute à '/projets' de routes.js
Router
  .get('/', (req, res) => {

    const projectsList = 'SELECT project_id, city, title, project_published, picture_small, alt, project_order FROM projects ORDER BY project_order';

    connection.query(projectsList, (err, result) => {
      if (err) throw err;
      return res.status(200).send(result);
    })
  })

// /http://localhost:8001/api/projets/bo
// * GET FrProjetsCardsAxios et FrProjetsCardsM
// * main, small picture, city, title + ids (projets + media)
// / attention : indiquer seulement '/', car s'ajoute à '/projets' de routes.js
Router
  .get('/bo', (req, res) => {

    const projectsList = 'SELECT project_id, city, title, project_published, picture_small, alt, project_order, text, address,date, surface_area, cost, type_of_project, clients, partners FROM projects ORDER BY project_order';

    connection.query(projectsList, (err, result) => {
      if (err) throw err;
      return res.status(200).send(result);
    })
  })


Router.post('/nouveau', (req, res) => {
  const newProject = 'INSERT INTO projects (project_order, picture_small, alt, city, title, text, address, date, surface_area, cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  // INSERT INTO`projects`(`city`, `title`, `text`, `address`, `date`, `surface_area`, `cost`, `order`) VALUES(NULL, 'Nantes', 'title 2', 'Lorem bla bla bla bla bla bla cbla bla bla bla bla bla', NULL, NULL, NULL, NULL, '2');

  const googleLinkRegex = /(.)+\b\=/g
  // (.)     all characters
  // +       unlimited times
  // \b         start of word
  // \=      "=" litteraly
  // selectionne https://drive.google.com/open?id=


  const values = [
    req.body.project_order,
    req.body.picture_small.replace(req.body.picture_small.match(googleLinkRegex), "https://drive.google.com/uc?export=view&id="),
    req.body.alt,
    req.body.city,
    req.body.title,
    req.body.text,
    req.body.address,
    req.body.date,
    req.body.surface_area,
    req.body.cost,
    req.body.clients,
    req.body.partners
  ];

  connection.query(newProject, values, (error, resultNew) => {
    if (error) throw error;
    return res.status(200).send(resultNew);
  })
})

Router.put('/modif/:id', (req, res) => {
  const modifyProject = 'UPDATE projects SET ? WHERE project_id = ?';
  const formData = req.body;
  const idProject = req.params.id;
  connection.query(modifyProject, [formData, idProject], (err, result) => {
    if (err) throw err;
    return res.status(200).send(result)
  })
})

//UPDATE `media` SET `main` = '1', `project_id` = '2' WHERE `media`.`id` = 4 AND `media`.`projects_id` = 1

module.exports = Router;