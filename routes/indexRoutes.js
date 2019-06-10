const express = require('express')

const homeRouter = require('./home')
const projetsRouter = require('./projets')
const detailsRouter = require('./details')
const profilRouter = require('./profil')
const contactRouter = require('./contact')
const publicationsRouter = require('./publications')

const authRouter = require('./BO/auth/auth')
// + continuer routes


const Router = express.Router();


// / où HomeRouter est l'alias résultant de l'importation
Router.use('/home', homeRouter)
Router.use('/projets', projetsRouter)
Router.use('/details', detailsRouter)
Router.use('/profil', profilRouter)
Router.use('/contact', contactRouter)
Router.use('/publications', publicationsRouter)

Router.use('/auth', authRouter)
// + continuer routes

module.exports = Router;