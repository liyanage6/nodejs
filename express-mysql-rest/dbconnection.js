var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'express_mysql_rest',
  port: 8889
});

module.exports = connection;
