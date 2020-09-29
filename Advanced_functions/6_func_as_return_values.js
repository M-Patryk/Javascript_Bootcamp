//Dla przykladu, funkcja ktora mnozy liczbe * n
//Dziala to tak, ze tworzymy funkcje, ktora mnozy liczby.
//A nastepnie zmienna, ktora bedzie = funkcji, ale bedzie miala przypisywane wartosci tj.

function MultiplyBy(num) {
	return function(x) {
		return num * x;
	};
}

// Mamy funkcje, teraz zmienna. Przypisujemy jej wartosc "num", czyli ile ma mnozyc. Chce tutaj zeby mnozylo x2
const podwojnie = MultiplyBy(2);

//Teraz mozna podac wartosc zmiennej zeby pomnozyc o x2

console.log(podwojnie(7), "podwojnie");

//Tak samo np dla potrojnie
const potrojnie = MultiplyBy(3);
console.log(potrojnie(7), "potrojnie");

//Skrocic o polowe
const halve = MultiplyBy(0.5);
console.log(halve(77), "halve");

//----------------------------------------------------------------------//

//Another example
function isBetween(x, y) {
	return function(age) {
		return age >= x && age <= y; //To jest boolean value. Sprawdza warunek, jesli sie zgadza daje true, jesli nie, false
	};
}
const checkIfKid = isBetween(0, 18);
console.log(checkIfKid(11), "Checks age");

//Inna zmienna
const checkSection = isBetween(2002, 2020);
console.log(checkSection(2001), "Checks range");
