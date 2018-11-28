var isBienPreparer = true;

//Promise
var willIGetDiplome = new Promise (
	function(resolve, reject) {
		if(isBienPreparer) {
			var certificat = {
				diplome: 'Node.js Black-Belt',
				mention: 'Bien'
			};
			resolve(certificat); // fullfilled
		} else{
			var reason = new Error('Mauvaise préparation');
			reject(reason); // reject
		}
	}
);

//2nd Promise
var showDiplome = function(certificat) {
	return new Promise(
		function (resolve, reject) {
			var message = 'Hey friend, I have a new ' +
			'Certificat ' +certificat.diplome+ ' avec la mention ' + 
			certificat.mention ;

			resolve(message);
		}
	)
}

//call our promise 
var demanderDiplome = function() {
	willIGetDiplome
		.then(showDiplome) // chain it here
		.then(function(fullfilled) {
			console.log(fullfilled);
		})
		.catch(function(error){
			console.log(error.message);
		})
}

demanderDiplome();