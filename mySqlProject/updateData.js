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
  var sql = "UPDATE customers SET address = 'Toulouse 18' WHERE address = 'Nice 71'";
  con.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    con.destroy();
  })
});
