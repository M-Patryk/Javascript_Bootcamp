// function makeDeck() {
// 	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
// 	const suits = [ 'hearts', 'diamonds', 'clubs', 'spades' ];
// 	let deck = [];
// 	for (let value of values.split(',')) {
// 		for (let suit of suits) {
// 			deck.push({ value, suit });
// 		}
// 	}
// 	return deck;
// }

// const myDeck = makeDeck();

// function drawCard(){
//     const randomCard = Math.floor(Math.random() * myDeck.length)
//     return myDeck.pop()
// }

//This is not really how it should be done, though.
//It would be way better to do all of it in an object

const myDeck = {
	values     : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	suits      : [ 'hearts', 'diamonds', 'clubs', 'spades' ],
	deck       : [],
	drawnCards : [],
	makeDeck() {
		const { values, suits, deck } = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({ value, suit });
			}
        }
        return deck.sort(() => Math.random() - 0.5);
		// return deck; it this case (when function and deck variable are in objects) we don't have to return deck
	},
	drawCard() {
        const drawnCard = this.deck.pop();
        this.drawnCards.push(drawnCard)
		return drawnCard;
	}
};
