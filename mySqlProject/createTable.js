var mysql = require('mysql');

var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "root",
  database: "express_mysql_rest",
  port: "8889"
});

con.connect( (err) => {
  if(err) throw err;
  console.log("Connected");
  var sql = "CREATE TABLE IF NOT EXISTS task (id VARCHAR(50) not null, title varchar (500) default null, status varchar(100) default null, primary key(id)) ENGINE=InnoDB DEFAULT CHARSET=latin1 ;";
  con.query(sql, (err, result) => {
    if(err) throw err;
    console.log("Table created");
    con.destroy();
  });
});
