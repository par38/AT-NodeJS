const express = require('express')
const Router = express.Router();
// const passport = require('passport')
// require('../passport')

const homeRouter = require('./home')
const projetsRouter = require('./projets')
const detailsRouter = require('./details')
const profilRouter = require('./profil')
const contactRouter = require('./contact')
const publicationsRouter = require('./publications')

// * ----------ADMIN LOGIN----------------
// const boUserRouter = require('./auth')
// const boProfil = require('./profile')

// + const authRouter = require('./BO/auth/auth')
// + continuer routes

// / où homeRouter est l'alias résultant de l'importation
Router.use('/home', homeRouter)
Router.use('/projets', projetsRouter)
Router.use('/details', detailsRouter)
Router.use('/profil', profilRouter)
Router.use('/contact', contactRouter)
Router.use('/publications', publicationsRouter)

// * ------------ADMIN LOGIN-----------------
// Router.use('/bo', boUserRouter)
// Router.use(
//   '/bo',
//   passport.authenticate("jwt", { session: false }),
//   boProfil
// )


// + Router.use('/auth', authRouter)
// + continuer routes

module.exports = Router;