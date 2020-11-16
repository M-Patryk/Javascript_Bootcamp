//forEach dla arrays. Wykonuje dana czynnosc dla kazdego elementu tablicy po kolei
//Przyklad

const numbers = [ 11, 12, 13, 14, 15, 16, 17, 18 ];

// numbers.forEach(function(num) {
// 	console.log(num * 2);
// });

//Or we can make a function first and then use it with .forEach

function PrintAsTriple(numb) {
	console.log(numb * 3);
}

numbers.forEach(PrintAsTriple)

//Another example

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

books.forEach(function(book){
    console.log(book.title.toUpperCase())
})

//Another thing worth to mention is that we can use second argument in forEach to print index

numbers.forEach(function(n, idx){
    console.log(idx, n)
})