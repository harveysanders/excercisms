//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var responses = ['Whatever.', 'Sure.', 'Whoa, chill out!', 'Fine. Be that way!'];

	if (/^[A-Z]+\s?$/.test(input) || (/[A-Z]{2,}/.test(input) && /\!$|\?$/.test(input)))
		return responses[2];
	else if (/\?$/.test(input))
		return responses[1];
	else if (/^$|^\s+$/.test(input))
		return responses[3];
	else
		return responses[0];

};

module.exports = Bob;
