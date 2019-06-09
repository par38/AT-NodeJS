const express = require('express')

const homeRouter = require('./home')
const projetsRouter = require('./projets')
const detailsRouter = require('./details')
const authRouter = require('./BO/auth/auth')
// + continuer routes

const Router = express.Router();

Router.use('/home', homeRouter)
Router.use('/projets', projetsRouter)
// / où ProjetsRouter est l'alias résultant de l'importation
Router.use('/details', detailsRouter)
Router.use('/auth', authRouter)
// + continuer routes

module.exports = Router;