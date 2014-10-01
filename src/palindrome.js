var isPallindrome = function(source) {
	if(!source) {
		return false;
	}
	// Normalize source
	source = source.toLowerCase().replace(/\W+/g, '');
	var reverseStr = [],
		i;
	for(i = source.length - 1; i >= 0; i--) {
		reverseStr.push(source[i]);
	}
	reverseStr = reverseStr.join('');
	console.log('Reversed String: ' + reverseStr);
	return source === reverseStr;
	},
	findPallindrome = function() {

	};

console.log('Pallindrome Check - ' + isPallindrome('A man, a plan, a canal: Panama'));

module.exports = isPallindrome;