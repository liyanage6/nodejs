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

  MongodbProjectDB.collection('todos').find({
    _id : new ObjectId('5bfe726085fc8644154e1f3b')
  }).toArray().then( (docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unabled to fetch todos', err);
  });

  db.close()
});
