//There is a reverse method but i have to solve this problem w/o using it.
//Write two functions "reverseArray" & "reverseArrayInPlace". The first, takes an array as argument and produces new array
//that has the same elements in the inverse order. The second, does what the reverse method does:
//it modifies the array given as argument by reversing its elements.

const nums = [ 1, 2, 3, 4, 5, 6 ];
const chemicalElements = [
    'Hydrogen','Helium','Lithium','Beryllium','Boron','Carbon','Nitrogen',
    'Oxygen','Fluorine','Neon','Sodium','Magnesium','Aluminum','Silicon','Phosphorus'
];
function reverseArray() {
	let newArray = [];
	for (i = nums.length; i >= 1; i--) {
		newArray.push(i);
	}
	return newArray;
}

//Z internetu. Nie zrobilem tego.
function reverseArrayInPlaceBook(array) {
	console.time('book one');
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	console.timeEnd('book one');
	return array;
}
