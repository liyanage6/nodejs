var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// l'option 'extend' defini a 'false' ne permet d'obtenir que des valeurs de
// type string ou array, si défini a 'true', tous type de vlaeur (ex: fichier...)
// voir doc
app.use(bodyParser.urlencoded({ extended: false }));

// Création d'un objet routeur
var router = express.Router();

// Routeur middleware, mentionner avant de définir les routes
router.use(function(req, res, next) {
	console.log("/" + req.method);
	next();
})

router.use('/user/:id', function(req, res, next){
	if (req.params.id == 0) {
		res.json({"message":"You must pass a ID other than 0"});
	}
	else next();
})

// Handler 404 error MIDDLEWARE
// app.use('*', function(req, res){
// 	res.status(404).send('404 Resource not found.');
// })

app.use("/api", router);

router.get('/', (req, res) => {
	res.json({"message" : "Hello World "})
});

router.get('/user/:id', function(req, res){
	res.json({'message' : 'Hello ' + req.params.id })
})

app.listen(3001, () => {
	console.log('live in port 3001 ...');
});

app.get('/hello', (req, res) => {
	res.sendFile(__dirname+'/index.html');
})

app.post('/submit-student-data', function(req, res) {
	var name = req.body.firstName + ' ' + req.body.lastName;
	res.send(name + ' Submited Successfully !');
})

app.put('/update-data', (req, res) => {
	res.send('Update Request');
})

app.delete('/delete-data', (req, res) => {
	res.send('Delete Request');
})
