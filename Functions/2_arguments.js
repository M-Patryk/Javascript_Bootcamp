function avg(a, b) {
	avgResult = (a + b) / 2;
	console.log(avgResult);
}
avg(33, 11);

//Calling funcion inside a function
function DiceRoll() {
	let random = Math.floor(Math.random() * 6 + 1);
	console.log(random);
}

function Rolls(numsOfRolls) {
	for (let i = 0; i < numsOfRolls; i++) {
		DiceRoll();
	}
}

Rolls(3);
