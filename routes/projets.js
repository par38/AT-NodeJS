const express = require('express')
const connection = require('../config/db')

const Router = express.Router();

// /http://localhost:8001/projets
// * GET FrProjetsCardsAxios et FrProjetsCardsM
// * main, small picture, city, title + ids (projets + media)
Router.get('/', (req, res) => {
  const projectsList = 'SELECT m.projects_id, m.alt, m.picture_small, p.id, p.city, p.title FROM media AS m JOIN projects AS p ON m.projects_id = p.id WHERE m.main = 1';
  connection.query(projectsList, (err, result) => {
    if (err) throw err;
    return res.status(200).send(result);
  })
})

// Router.post
// INSERT INTO `projects` (`id`, `city`, `title`, `text`, `address`, `date`, `surface_area`, `cost`, `order`) VALUES (NULL, 'Nantes', 'title 2', 'Lorem bla bla bla bla bla bla cbla bla bla bla bla bla', NULL, NULL, NULL, NULL, '2');

// Router.put
// UPDATE `media` SET `main` = '1', `projects_id` = '2' WHERE `media`.`id` = 4 AND `media`.`projects_id` = 1;

module.exports = Router;