//Write a function which returns a random playing card object, like
//  {
//      value: 'K',
//      suit: clubs
//  }
//Pick a random value from //-- 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from //-- clubs, spades, hearts, diamonds
//Return both in an object

// const Cards = {}
// function getCard() {
// const cardValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
// const cardSuits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

// let randomValue = Math.floor(Math.random() * 14);
// let randomSuit = Math.floor(Math.random() * 4);

// Cards['value'] = `${cardValues[randomValue]}`;
// Cards['suit'] = `${cardSuits[randomSuit]}`;
// }
// getCard();
// console.log(Cards);

//Different, better way imo
function pick(arr) {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

function getCard() {
	const cardValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
	const cardSuits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

	const value = pick(cardValues);
	const suit = pick(cardSuits);

	return { value: value, suit: suit };
}

console.log(getCard());
