const btn = document.querySelector('#btn');

const moveButton = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRightEdge = element.getBoundingClientRect().right;
			const elLeftEdge = element.getBoundingClientRect().left;
			if (elRightEdge + amount > bodyBoundary) {
				reject({elRightEdge, bodyBoundary, amount});
			} else {
				btn.style.transform = `translateX(${elLeftEdge + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveButton(btn, 200, 1000) //This runs first
	.then(() => { //If everything is OK, then this line runs
		return moveButton(btn, 200, 1000);
	})
	.then(() => { //If everything is OK, then this line runs and so on
		return moveButton(btn, 200, 1000);
	})
	.then(() => {
		return moveButton(btn, 200, 1000);
	})
	.then(() => {
		return moveButton(btn, 200, 1000);
	})
	.catch(({bodyBoundary, elRightEdge, amount}) => {
        console.log(`Body boundary is: ${bodyBoundary}px`)
        console.log(`Right element egde is: ${elRightEdge}px, ${amount}px is too large`)
    });
