// Basically if variable is called "max" and we want to have in object id "max" with value "max" we can do this shorter
//We dont have to write "max: max" but just "max" and it will work the same as calling it "max:" first

//Example
const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((total, val) => total + val);
	const avg = sum / arr.length;
	return {
		max,
		min,
		sum,
		avg
	};
};

const reviews = [ 4.21, 3.52, 2.11, 5.0, 3.77, 4.52, 3.87, 3.9 ];

const stats = getStats(reviews);

//Old, updated exercise -- Get random value and shape card

const values = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const suit = [ 'heart', 'diamonds', 'clubs', 'spade' ];

function getValue(){
	function pick(array){
		Math.floor(Math.random() * array.length)
	}
	let cardValue = pick(values)
	cardValue = values[cardValue]
	let cardSuit = pick(suit)
	cardSuit = suit[cardSuit]
	return {cardValue, cardSuit}
}
