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


Router.post('/nouveau', (req, res) => {
  const newProject = 'INSERT INTO projects (project_order, picture_small, alt, city, title, text, address, date, surface_area, cost) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  // INSERT INTO`projects`(`city`, `title`, `text`, `address`, `date`, `surface_area`, `cost`, `order`) VALUES(NULL, 'Nantes', 'title 2', 'Lorem bla bla bla bla bla bla cbla bla bla bla bla bla', NULL, NULL, NULL, NULL, '2');

  const googleLinkRegex = /(.)+\b\=/g

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
    req.body.cost
  ];

  connection.query(newProject, values, (error, resultNew) => {
    if (error) throw error;
    return res.status(200).send(resultNew);
  })
})

// Router.put
// UPDATE `media` SET `main` = '1', `projects_id` = '2' WHERE `media`.`id` = 4 AND `media`.`projects_id` = 1;

module.exports = Router;