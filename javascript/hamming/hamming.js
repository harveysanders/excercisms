var compute = function(dnaStr1, dnaStr2) {

	if (dnaStr1.length !== dnaStr2.length) {
		throw 'DNA strands must be of equal length.';
	} else {
		var distance = 0;
		for (var i = 0; i < dnaStr1.length; i++){
			if (dnaStr1[i] !== dnaStr2[i]) {distance++;}
		}
		return distance;
	}
};

module.exports = compute;