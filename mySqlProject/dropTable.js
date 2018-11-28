var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889",
  database: "mydb"
});

con.connect ( (err) => {
  if(err) throw err;
  var sql = "DROP TABLE customers";
  con.query(sql, (err, result) => {
    if(err) throw err;
    console.log("Table delete");
    con.destroy();
  })
});
