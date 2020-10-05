// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
// from start up to (and including) end.
// Modify your range function to take an optional third argument that indicates the “step” value used when
// building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.
// The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ];

function findRange(start, end, step) {
	let array = [];
	if (step == null) 
		step = 1;
	if (step > 0) {
		for (i = start; i <= end; i += step) {
			array.push(i);
		}
	} else {
		for (i = start; i >= end; i += step) {
			array.push(i);
		}
	}
	return array;
}
console.log(findRange(15, 1, -2));
