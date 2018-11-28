var emitter = require("events").EventEmitter;

var em = new emitter();

//Subscribe SecondEvent
em.on('SecondEvent', (data) => {
	console.log('Second subscriber: '+ data);
});

//Raising SecondEvent
em.emit('SecondEvent', "This is my second event emitter ...");