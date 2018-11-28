var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'express-mysql',
  port: '8889'
});

var app = express();

connection.connect(function (err){
  if(!err) {
    console.log("Database is conencted ... nn");
  } else {
    console.log("Error connecting to database ... nn");
    console.log(err);
  }
});

app.get("/", function (req, res) {
  connection.query('SELECT * FROM products LIMIT 2', function(err, rows, fields){
    connection.end();
    if(!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query');
  });
});

app.listen(3000);
