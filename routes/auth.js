const Express = require("express");
const authRouter = Express.Router();
const connection = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const passport = require("passport");
const jwt = require("jsonwebtoken");

// + SIGNUP
authRouter
  .route("/signup")
  .get((req, res) => {
    res.send("I am in GET signup");
  })
  .post((req, res) => {
    const { mail, password } = req.body;
    // . console.log(mail, password);
    const hash = bcrypt.hashSync(password, saltRounds);
    // . console.log(hash)

    const SQLpost = `INSERT INTO user (mail, password) VALUES (?,?)`;
    connection.query(
      SQLpost,
      [mail, hash],
      (err, result) => {
        if (err) res.status(500).json({ flash: err.message });
        else res.status(200).json({ flash: "Nouvel utilisateur enregistré", result });
      }
    );
  });

// + SIGNIN
authRouter
  .route("/signin")
  .post(passport.authenticate("local", { session: false }), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    const token = jwt.sign(req.user.mail, process.env.JWT_SECRET);
    console.log("auth process.env.JWT_SECRET", process.env.JWT_SECRET)
    console.log("auth token: ", token)
    return res.status(200).json({ mail: req.user.mail, token: token });
  });

module.exports = authRouter;