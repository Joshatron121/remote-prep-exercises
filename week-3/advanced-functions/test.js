var foo = function(counter){
	var counter = counter || 5

	if (counter <= 5) {
		return "boom!"
	}
	counter--;

	return foo(counter);
}

console.log(foo());