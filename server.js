var http = require('http');

http.createServer( (req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Helo World\n");
}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');