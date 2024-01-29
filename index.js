const serverless = require("serverless-http");
const express = require("express");
const mySql = require("mysql");

const app = express();

app.get("/search/:searchTerm", (req, res, next) => {
  const { searchTerm } = req.params;

  const connection = mySql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const sql = `SELECT * FROM locations WHERE City like '%${searchTerm}%' OR Zipcode LIKE '%${searchTerm}%' AND EstimatedPopulation IS NOT NULL
  ORDER BY CAST(EstimatedPopulation as unsigned) DESC LIMIT 5;`

  connection.connect((err) => {
    if (err) return console.error(err.message);
    connection.query(sql, [true], (error, results) => {
      if (error) return console.error(error.message);
      return res.status(200).json(results);
    });
    connection.end();
  });

});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
