var fs = require('fs');


fs.readFile('FileSystem/testFile.txt', (err, data) => {
	if (err) throw err;

	console.log(data.toString());
})


fs.open('FileSystem/testFile.txt', 'r', (err, fd) => {
	if(err){
		return console.log(err);
	}

	var buffr = new Buffer(1024);

	fs.read(fd, buffr, 0, buffr.length, 0, (err, bytes) => {
		if(err) throw err ;

		// Print only read bytes to avoid junk.
		if(bytes > 0){
			console.log(buffr.slice(0, bytes).toString());
		}

		//Close to opened file 
		fs.close(fd , (err) => {
			if (err) throw err;
		})
	})
})


fs.unlink('data/test.txt', () => {
	console.log('write operation complete');
});