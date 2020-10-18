//Dla obiektow to wyglada tak

const runner = {
	first   : 'Patryk',
	last    : 'Majchrzak',
	country : 'Poland',
	titles  : 'none'
};

function printRunner({ first, last, titles }) {
	console.log(`${first} ${last}, ${titles}`);
}

//Dla tablic, tak
const response = [ 'HTTP/1.1', '200 OK', 'application/json' ];


function parseResponse([protocol,status , contentType]){
    console.log(`Type: ${contentType}`)
}