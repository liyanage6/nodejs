var emitter = require("events").EventEmitter;

var util = require('util');

function LoopProcessor(num) {
	var me = this;

	setTimeout( ()=> {
		for (var i =1; i<=num; i++) {
			me.emit('BeforeProcess', i);

			console.log('Processing number: '+ i);

			me.emit('AfterProcess', i);
		}
	}
	, 2000);

	return this;
}

util.inherits(LoopProcessor, emitter)

var lp = new LoopProcessor(3);

lp.on('BeforeProcess', (data) => {
	console.log("About to start the process for "+ data);
});

lp.on('AfterProcess', (data) => {
	console.log('Completed processing '+ data);
});