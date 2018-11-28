var myLogModule = require("./log.js");
var msgSimple = require("./messages.js");
var msg = require("./log.js")
var data = require("./data.js");
var person = require("./utility/person.js");


myLogModule.info("Node.js started");

console.log(msgSimple.SimpleMessage);

msg.log('Hello world log');

console.log(data.firstname+" "+data.lastname);

msg.logFunc("Nicholas");

var person1 = new person("Nicholas", "Liyanage");
console.log(person1.fullname());