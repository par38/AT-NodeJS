const express = require('express')

const Router = express.Router();

const projetsRouter = require('./projets')
const detailsRouter = require('./details')
// + continuer routes

Router.use('/projets', projetsRouter)
// / où ProjetsRouter est l'alias résultant de l'importation
Router.use('/details', detailsRouter)
// + continuer routes

module.exports = Router;