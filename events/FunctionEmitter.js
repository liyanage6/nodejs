var emitter = require("events").EventEmitter;

function LoopProcessor(num) {
	var e = new emitter();

	setTimeout( () => {
		for (var i=1; i <= num; i++) {
			e.emit('BeforProcess', i);

			console.log('Processing number: '+ i);

			e.emit('AfterProcess', i);
		}
	}
	, 2000)

	return e;
}

var lp = LoopProcessor(3);

lp.on('BeforProcess', (data) => {
	console.log('About to start the process for '+ data);
});

lp.on('AfterProcess', (data) => {
	console.log('Completed processing '+ data);
});