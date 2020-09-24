function findNumber(number) {
	function checkingForSolution(current, history) {
		if (current == number) {
			return history;
		} else if (current > number) {
			return null;
		} else {
			return (
				checkingForSolution(current + 5, `(${history} + 5)`) ||
				checkingForSolution(current * 3, `(${history} * 3)`)
			);
		}
	}

	return checkingForSolution(1, '1') || 'Sorry, could not find an algorithm! Try other number'
}
console.log(findNumber(35))
