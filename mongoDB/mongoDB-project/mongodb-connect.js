const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo-db', (err, db) => {

  //Constante pour la creation de la DB
  //A utiliser pour la collection
  const MongodbProjectDB = db.db('todo-project-db');

  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected to MongoDB server");

  MongodbProjectDB.collection('todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unabled to insert Todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
