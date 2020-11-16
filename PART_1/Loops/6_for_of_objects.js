//W tablicy printuje elementy
//const array1 = ['a', 'b', 'c'];
//
//for (const element of array1) {
//  console.log(element);
// }
//
// expected output: "a"
// expected output: "b"
// expected output: "c"
// Way of iterating over arrays

const movieRevievs = {
	Mars    : 7.2,
	Mercury : 2,
	Venus   : 4,
	Earth   : 10,
	Jupiter : 4.4,
	Saturn  : 9,
	Uran    : 6.9,
	Neptun  : 1
};

//Dwie nowe metody dla TABLIC!

console.log(Object.keys(movieRevievs));
console.log(Object.values(movieRevievs));

//Dla przykladu
for (movie of Object.keys(movieRevievs)) {
	console.log(movie, movieRevievs[movie]);
}

//Tutaj wyznaczam avg score

const numbersOfRatings = Object.values(movieRevievs);
let sum = 0;
for (score of Object.values(movieRevievs)) {
	sum += score;
}

console.log(sum / numbersOfRatings.length);

//For in in 7th file might be better if we want key and a value