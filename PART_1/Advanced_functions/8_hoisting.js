//Troche pokrecony temat. https://www.udemy.com/course/javascript-beginners-complete-tutorial/learn/lecture/17010204
//TLDR: kolejnosc wywolywania ma znaczenie

//Jak mozna zauwazyc w konsoli, po wywolaniu "var animal" nie wyskakuje nam blad, lecz undefined
//czyli JS wie, ze zmienna jest, ale jest w zlej kolejnosci i nie odczytuje jej wartosci
console.log(animal);
var animal = 'Dolphin';
console.log(animal);

//Teraz, jesli zmienilibysmy na "let animal" to z wejscia dostajemy error w konsoli
//Oznacza to, ze "let i const" nie sa tak samo "hoistowane", jak "var"

//-------------------------------------------//
//Dla funkcji to wyglada tak, ze nie wazne gdzie beda funkcje zadeklarowane, mozemy je przywolac z kazdego miejsca

msg();
function msg() {
	console.log('Im a message');
}


//Nie dziala to jednak z "function expression", czyli

ryba();
const ryba = function() {
	console.log('Sum');
};
