var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "npm_mysql_project",
  port: "8889"
});

con.connect( (err) => {
  if(err) throw err;
  console.log("Connected");
  var sql = "INSERT INTO customers (name, address) VALUES ('Nicholas', '10 rue de la paix')";
  con.query(sql, (err, result) => {
    if(err) throw err;
    console.log("1 record insertd");
    con.destroy();
  });
});
