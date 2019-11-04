const mysql = require('mysql2');

// -require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  // jwtKey: process.env.JWT_SECRET

  multipleStatements: true,

})

connection.connect((err) => {
  if (err) throw err;
  console.log('connected');
})

module.exports = connection;

// exports.JWT_SECRET = "your_jwt_secret_db";