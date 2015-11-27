var DnaTranscriber = function() {};

var dnaTranscriber = DnaTranscriber.prototype.toRna = function(nucleobase) {
	return nucleobase.split('').map(function(nucleobase){
		if (nucleobase === 'A')
			return 'U';
		else if (nucleobase === 'T')
			return 'A';
		else if (nucleobase === 'C')
			return 'G';
		else (nucleobase === 'G')
			return 'C';
	}).join('');
};

module.exports = DnaTranscriber;