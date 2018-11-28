// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb'); //identique au précédent

MongoClient.connect('mongodb://localhost:27017/todo-db', (err, db) => {

  //Creation d'un constante pour la creation de la DB
  //A utiliser pour la collection
  const MongodbProjectDB = db.db('todo-project-db');

  if(err) {
    return console.log('Unable to conenct to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  MongodbProjectDB.collection('todos').findOneAndUpdate(
    { _id : new ObjectId('5bfe726085fc8644154e1f3b')},
    {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    db.close();
});
