const express = require('express')

const homeRouter = require('./home')
const projetsRouter = require('./projets')
const detailsRouter = require('./details')
// + continuer routes

const Router = express.Router();

Router.use('/', homeRouter)
Router.use('/projets', projetsRouter)
// / où ProjetsRouter est l'alias résultant de l'importation
Router.use('/details', detailsRouter)
// + continuer routes

module.exports = Router;