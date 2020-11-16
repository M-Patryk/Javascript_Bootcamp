//Przyklad
function CallTwice(func) {
	func();
	func();
}

function cry() {
	console.log("I'm crying");
}
function laugh() {
	console.log('hahahahah');
}
CallTwice(cry);

//Another example
function repeatNTimes(f, n) {
	for (i = 0; i < n; i++) {
		f();
	}
}

repeatNTimes(laugh, 3);

//Another example

function pickOne(f1, f2) {
	let random = Math.random();
	if (random < 0.5) {
		f1();
	} else {
		f2();
	}
}

pickOne(cry, laugh)