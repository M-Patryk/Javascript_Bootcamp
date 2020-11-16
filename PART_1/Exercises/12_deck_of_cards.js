//Exercise ---Make functions:
// -- to create deck of shuffled cards
// -- to take one card from deck and put it into drawn cards pile
// -- to draw multiple cards and also put it into drawn cards pile

const myDeck = {
	values            : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	suits             : [ 'hearts', 'diamonds', 'clubs', 'spades' ],
	deck              : [],
	drawnCards        : [],
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
	takeCard() {
		const drawnCard = this.deck.pop();
		const draw = this.drawnCards.push(drawnCard);
		return drawnCard;
	},
	drawMultipleCards(quantity = 1) {
		const cards = [];
		for (let i = 0; i < quantity; i++) {
			cards.push(this.takeCard());
		}
		return cards;
	}
};

//This is not really a good way to do this but i dont know specific methods to make it "cleaner"
//But if i wanted to create seperate deck variables i would have to add return at the beginning and put the object into variable

const makeNewDeck = () => {
	return {
		values            : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
		suits             : [ 'hearts', 'diamonds', 'clubs', 'spades' ],
		deck              : [],
		drawnCards        : [],
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
		takeCard() {
			const drawnCard = this.deck.pop();
			const draw = this.drawnCards.push(drawnCard);
			return drawnCard;
		},
		drawMultipleCards(quantity = 1) {
			const cards = [];
			for (let i = 0; i < quantity; i++) {
				cards.push(this.takeCard());
			}
			return cards;
		}
	};
};


//So now, if i wanted new deck of cards, i can make new variable
//in console const deck1 = makeNewDeck()