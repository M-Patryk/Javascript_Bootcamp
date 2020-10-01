//It is used to create new array from an existing array.
//Or to extract portions of the array or to somehow transform portions of the array to new array

//Example
const numbers = [ 21, 22, 23, 24, 25, 26, 27 ];

const doubles = numbers.map(function(num) {
	return num * 2;
});
console.log(doubles);

//Another example (checking if num is even or odd and maps into object)
const even = numbers.map(function(num) {
	return {
		value  : num,
		isEven : num % 2 === 0
	};
});

console.log(even);

//Another example. We have an array with strings. Each string has to be written with capital letters and letter has to be separated
//with a "." so "asap" = "A.S.A.P"
//Abbreviation - skrot
const words = [ 'asap', 'byob', 'rsvp', 'haha', 'wololo' ];
const abbreviation = words.map(function(word) {
	return word.toUpperCase().split('').join('.'); //.split('') splituje kazdy znak do nowej tablicy,
	// a pozniej .join('.') dodaje . za kazdym znakiem
});

console.log(abbreviation);


//Another example
//Chcemy w tablicy miec tylko tytuly ksiazek
const books = [{
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    rating: 4.25
 },
 {
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    rating: 4.66
 },
 {
    title: 'Throne of Glass',
    author: 'Sarah J. Maas',
    rating: 4.88
 },
 {
    title: 'Lalka',
    author: 'Nie pamietam',
    rating: 2
 }
]

const booksTitles = books.map(function(book){
    return [book.title, book.rating]
})

console.log(booksTitles)