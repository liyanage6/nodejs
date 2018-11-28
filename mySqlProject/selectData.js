var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889",
  database: "npm_mysql_project"
});

con.connect ( (err) => {
  if(err) throw err;
  con.query("SELECT * FROM customers", (err, result) => {
    if(err) throw err;
    console.log(result);
    // console.log(fields);
    con.destroy();
  });
});
