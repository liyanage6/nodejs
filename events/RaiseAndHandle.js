// get the reference of EventEmitter  class of events module 
var events = require('events');

//create a object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent 
em.on('FirstEvent', (data) => {
	console.log('Premier subscriber: '+ data);
});

//Raising for FirstEvent
em.emit('FirstEvent', 'Premier Node.js event emitter ...');
