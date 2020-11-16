// this - reference to current execution scope

function sayHi() {
	console.log('Hi');
	//'this' refers to the window (global scope object of the browser)
	console.log(this);
}
//TLDR. tutaj "this" wyrzuca nam okno przegladarki

//A tutaj wyrzuca nam wlasciwosci obiektu
const person = {
	first    : 'Patryk',
	last     : 'Majchrzak',
	nickname : 'Hapay',
	fullname() {
		console.log(this);
	}
};

//TLDR Why would you care about the current object that your are inside of it, well it allows us to reference these properties
//or other methods so we can have a method that is aware of the other contents in its object

//EXAMPLE
const person2 = {
	first    : 'Gabrysia',
	last     : 'Kowalik',
	nickname : 'Gabi',
	fullName() {
		const { first, last, nickname } = this;
		return `${first} ${last} AKA ${nickname}`;
	},
	//Another example - expading this object
	login() {
		const fullname = this.fullName();
		return `Hello, ${fullname}, good to see you back!`;
	}
};
