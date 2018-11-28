// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); //identique au précédent

MongoClient.connect('mongodb://localhost:27017/todo-db', (err, db) => {

  //Creation d'un constante pour la creation de la DB
  //A utiliser pour la collection
  const MongodbProjectDB = db.db('todo-project-db');

  if(err) {
    return console.log('Unable to conenct to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndDelete
  MongodbProjectDB.collection('todos').findOneAndDelete({completed:true}).then((result)=>{
    console.log(result);
  });

  db.close();
});

// //deleteMany
// db.collection('todos').deleteMany({text:"Eat lunch"}).then((result) => {
//   console.log(result);
// });
//
// //deleteOne
// db.collection('todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
