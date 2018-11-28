var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var router = require('./routes/Task.js');

//Tell express to use this router with /api before
//You can put just '/' if you don't want any sub path before routes.
app.use("/tasks", router);

app.listen(3000, function(){
  console.log("Listen at Port 3000");
});
