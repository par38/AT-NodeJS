const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config();

// liste des routes
const indexRoutes = require('./routes/indexRoutes')

const passport = require('passport')
require('./passport')

// je configure l'application
app.use(cors())
app.use(morgan('dev'))  // 'dev' permet de colorer les reponses

// permet d'utiliser req.body et req.params dans les routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* je teste la partie API, en / (sans /api)  >> OK
app.get("/", (req, res) => {
  res.send("youhou");
})

// * VRAIE ROUTE
app.use('/api', indexRoutes)

app.use("/bo/auth", require("./routes/auth"));

app.use(
  "/bo/profile",
  passport.authenticate("jwt", { session: false }),
  require("./routes/profile")
);

//* dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Pour servir des fichiers statiques tels que les images, les fichiers CSS et les fichiers JavaScript, utilisez le MiddleWare intégré express.static dans Express.
// Il est plus sûr d’utiliser le chemin d’accès absolu que vous voulez servir __dirname + :
app.use(express.static(__dirname + '/public'))

// serveur node
let server = app.listen(process.env.PORT || 8001, function () {
  console.log('Listening on port ' + server.address().port);
})