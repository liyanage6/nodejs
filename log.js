var log = {
	info: (info) => {
		console.log('Info: '+info);
	},
	warning: (warning) => {
		console.log("Warning: "+warning);
	},
	error: (error) => {
		console.log("Error: "+error);
	}
};

module.exports = log;

module.exports.log = (msg) => {
	console.log(msg);
};

module.exports.logFunc = (msg) => {
	console.log(msg);
};

