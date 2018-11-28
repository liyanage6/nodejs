var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "8889",
  database: "express_mysql_rest"
});

con.connect((err) => {
  if(err) throw err;
  console.log("Connected");
  var sql = "INSERT INTO task (id, title, status) VALUES ?";
  var values = [
    ["1", 'Go to market tomorrow', 'done'],
    ["2", 'Football jeudi', 'pending'],
    ["3", 'Push code to Github', 'pending'],
    ["4", 'Rendre contract d\'alternace', 'done'],
    ["5", 'Go to the gym', 'done'],
    ["6", 'Cinema samedi ', 'pending'],
  ];
  con.query(sql, [values], (err, result) => {
    if(err) throw err;
    console.log('Number of records inserted: '+ result.affectedRows);
    con.end();
  });
});
