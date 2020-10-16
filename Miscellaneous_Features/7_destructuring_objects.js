const runner = {
	first   : 'Patryk',
	last    : 'Majchrzak',
	country : 'Poland',
	titles  : 'none'
};

//----- const { first, last } = runner;
//Po wpisaniu "first" dostajemy "Patryk" i analogicznie z "last"

const { country: nation, titles: honorific } = runner;
//Po wpisaniu "nation" dostajemy "Poland", a po "honorific" dostajemy "none"

//Tak samo, jak z tablicami, mozemy uzyc "rest parameter"
const { first, last, ...rest } = runner;
