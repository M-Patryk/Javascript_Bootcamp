//Deklaracja funkcji w sposob na variable i funkcje
function add(x, y) {
	return x + y;
}
const subtract = function(x, y) {
	return x - y;
};
function multiply(x, y) {
	return x * y;
}
const divide = function(x, y) {
	return x / y;
};

//Mozna takie funkcje wrzucic np w tablice lub obiekt
const operations = [ add, subtract, multiply, divide ];
for (func of operations) {
	let result = func(40, 8);
	console.log(result);
}

//Deklarujemy obiekt i pozniej z niego tez mozemy przywolywac funkcje
const obiekt = {
	doSomething : multiply
};

console.log(obiekt.doSomething(17, 3));

//Co z tego mozna wywnioskowac to, ze obiekt.doSomething jest metoda np jak .length
//Czyli funkcja umieszczona w obiekcie daje metode
