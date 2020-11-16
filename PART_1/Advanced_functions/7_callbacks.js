// Callbacks, czyli funkcje, ktore sa przekazywane to innych funkcji
//Byly przyklady np w 5 czy 6.js

//Ale czasem np nie chcemy podawac innej funkcji, ale chcemy zeby cos sie wykonalo.
//Dla przykladu mozemy uzyc "anonymous" funkcji
setTimeout(function() {
	alert('Hi there!');
}, 250000); //1000 = 1sec

// ---------------------------------------------------------------//

//Another example
//Tutaj juz jest DOM, ale to taki przedsmak tylko :)

// function AnnoyingWindow(){
//     alert("Should not have clicked")
// }

const btn = document.querySelector('button');
btn.addEventListener(
	'click',
	/*AnnoyingWindow*/ function() {
		//funkcja jesli cos ma byc wywolywane kilka razy, ale jesli raz to deklaracja tutaj
		alert('Should not have clicked!');
	}
);
