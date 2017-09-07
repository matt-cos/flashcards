function makeAnimalCounter(noun) {
	var count = 0;

	return function() {
		count += 1;
		return count + ' ' + noun;
	}
}

var alpha = makeAnimalCounter("yahoo");
var bravo = makeAnimalCounter("bravo");

alpha();
bravo();