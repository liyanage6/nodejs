var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889"
});

con.connect ( (err) => {
  if(err) throw err;
  console.log("Connected");
  con.query("CREATE DATABASE express_mysql_rest", (err, result) => {
    if(err) throw err;
    console.log("Database created");
    con.destroy();
  });
});
