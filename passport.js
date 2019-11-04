const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const connection = require('./config/db')
// const JWT_SECRET = require('./config/db')
// console.log("JWT_SECRET : ", JWT_SECRET)

const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const { JWT_SIGN_SECRET } = require("./constants");
// console.log(JWT_SIGN_SECRET)
// const { JWT_SIGN_SECRET } = process.env.JWT_SECRET;
// const { JWT_SIGN_SECRET } = JWT_SECRET
// console.log(process.env.JWT_SECRET)


passport.use(
  new localStrategy(
    {
      usernameField: "mail",
      passwordField: "password",
      session: false
    },
    (mail, password, cb) => {
      const SQLget = `SELECT mail, password FROM user WHERE mail = ?;`
      connection.query(SQLget, [mail, password], (err, data) => {
        // + en cas d'erreur
        if (err) return cb(err)

        // + pas de correspondances mail ou password
        if (!data) return cb(null, false, { message: "Incorrect email ou password. - erreur d'adresse mail" })

        if (!bcrypt.compareSync(password, data[0].password))
          return cb(null, false, { message: "Incorrect email ou password. - erreur de mot de passe" })

        // + OK, retourne user
        return cb(null, data[0])
      })
    }
  )
)

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      // secretOrKey: process.env.JWT_SECRET
      secretOrKey: JWT_SIGN_SECRET
    },
    (jwtPayload, cb) => {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return cb(null, jwtPayload);
    }
  )
)