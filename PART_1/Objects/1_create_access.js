//Object is like a container that contains key-value pairs

const fitapka = {
	kroki                : 45634,
	totalKm              : 1532,
	avgSpaloneKalorie    : 135125,
	treningiWTymTygodniu : '4 of 7',
	avgDobrySen          : '2:13'
};

//To jest jedna z metod wywolywania wartosci
console.log(fitapka.kroki);
console.log('\n-------DRUGA METODA WYWOLYWANIA-------');
//Druga metoda
const numbers = {
	100       : 'one hundred',
	14        : 'fourteen',
	'76 slon' : 'yyyy nie wiem'
};
console.log(numbers[100]);
console.log(numbers['76 slon']);


//Czasami checmy dostac wartosci ze zmiennych i tylko w ten sposob ( METODA 2) mozemy je dostac
console.log('\n-----Dalej druga metoda-----');

const paletaKolorow = {
	yellow : '#f9ca24',
	red    : '#ff0000',
	blue   : '#0000ff'
};

let wybranyKolor = 'blue';
console.log(paletaKolorow[wybranyKolor]);
