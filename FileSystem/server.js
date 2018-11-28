var fs = require('fs');

fs.readFile('testFile.txt', (err, data) => {
	if (err) throw err;

	console.log(data.toString());
})
