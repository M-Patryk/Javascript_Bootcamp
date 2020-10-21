//Create an object which has an array with "bad words",
//then make a function which picks random word from "bad words",
//make a timer so it prints one of the "bad words" every x amount of seconds
//and at the end, make a stop function

const badPhrases = {
	phrases    : [ 'usiasc sie', 'poszlem', 'wyszlem', 'tedyk', 'andzia' ],
	pickPhrase() {
		const { phrases } = this;
		const rand = Math.floor(Math.random() * phrases.length);
		return phrases[rand];
	},
	start() {
		this.timer = setInterval(() => {
			console.log(this.pickPhrase());
		}, 1500);
	},
	stop() {
		clearInterval(this.timer);
		console.log('THE INTERVAL HAS BEEN STOPPED');
	}
};
