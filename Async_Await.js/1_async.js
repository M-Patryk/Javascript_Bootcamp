// Async function is a function that returns a 'promise'

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	}
	return x + y;
}

add(2, 'e')
	.then((val) => {
		console.log('"Add" Promise resolved with: ', val);
	})
	.catch((val) => {
		console.log('"Add" Promise rejected with: ', val);
	});

// Bez async funkcji wygladaloby to tak

function multiply(x, y) {
	return new Promise((resolve, reject) => {
		if (typeof x !== 'number' || typeof y !== 'number') {
			reject('X and Y must be numbers!');
		}
		resolve(x * y);
	});
}

multiply(3, 6)
	.then((val) => {
		console.log('"Multiply" Promise resolved with: ', val);
	})
	.catch((val) => {
		console.log('"Multiply" Promise rejected with: ', val);
	});
