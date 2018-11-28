var mongoose = require('mongoose');

//if our user.js file is at app/models/user.js
var User = require('./models/user');

mongoose.connect("mongodb://localhost/mongoose-project-db");

//create a new user called chris
var doum = new User({
  name: 'Nicholas',
  username: 'nicho',
  password: 'aze123'
});

//call the custom method. This will just add "-dude" to this name
//user will now be Chris-dude
doum.naming(function(err, name){
  if(err) throw err;

  console.log('Your new name is '+ name);
});

//call the buil-in save method to save to the database
doum.save(function(err) {
  if(err) throw err;

  console.log("User saved successfully !");
})
