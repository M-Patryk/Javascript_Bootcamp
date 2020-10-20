//Jest tu pokazane, jak dzialaja metody. Jak sa deklarowane i jak wykonywane

const math = {
	add      : function(x, y) {
		return x + y;
	},
	multiply : function(x, y) {
		return x * y;
	}
};
//Dla przykladu w konsoli
console.log(math.multiply(1,5))