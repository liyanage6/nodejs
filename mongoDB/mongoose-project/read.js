var mongoose = require('mongoose');

//if our user.js file is at app/model/user.js
var User = require('./models/user.js');

mongoose.connect('mongodb://localhost/mongoose-project-db');

//get all the users
User.find({}, function(err, users){
  if(err) throw err;

  //object of all the users
  console.log(users)
});

//get one user with parameters
User.find({name:"nicholas"}, function(err, user){
  if(err) throw err;

  //objet if the user
  console.log(user);
});

//get user by id
User.find({_id:"5bff2053e7ae485ac84771f9"}, function(err, user){
  if(err) throw err;
  console.log(user);
});
