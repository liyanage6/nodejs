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
  var sql = "DELETE FROM customers WHERE address = 'Toulouse 18'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Number of record(s) delete '+result.affectedRows );
    con.destroy();
  });
});
