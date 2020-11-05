// Jak sama nazwa wskazuje, jest to funkcja, ktora sie wykonywana w danym przypadku.
// .then() wykonuje dla RESOLVE
// .catch() wykonuje dla REJECT
const getADog = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand > 0.5) {
				resolve();
			} else {
				reject();
			}
		}, 3000);
	});
};
getADog()
	.then(() => {
		console.log('YAY I GOT A DOG!');
	})
	.catch(() => {
		console.log('No Dog');
	});
