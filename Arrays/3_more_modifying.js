//concat, includes, indexOf, reverse, join

//Combines arrays - concat
//Ktore jest dodowane do ktorego ma znaczenie
const fruits = [ 'apple', 'banana' ];
const vegies = [ 'potato', 'carrot' ];
console.log(fruits.concat(vegies));
console.log(vegies.concat(fruits));


//Mozna tez dodawac do siebie nested arrays
const nArray1 = [ [ 1 ] ];
const nArray2 = [ 2, [ 3 ] ];
const nestedArray = nArray1.concat(nArray2);
console.log(nestedArray, 'Po zlaczeniu tablic w jedna tablice');
nestedArray[0].push(5);
console.log(nestedArray, 'Po dodaniu "5" na pozycje 0');

// .join Turns the array into a string // w nawiasie podajemy, jak maja byc oddzielone wartosci z tablicy
console.log(books.join())
console.log(books.join("."))
console.log(books.join(" "))

//includes - finding values
//Finding and checking value in arrays "includes" and "indexOf"
let ingridients = [ 'water', 'milk', 'two eggs', 'sugar', 'oil', 'flour', 'butter' ];
console.log(ingridients.includes('milk'));

//checking for value 'water' after index 3
console.log(ingridients.includes('water', 3));


//Finding values -- indexOf
console.log(ingridients.indexOf('sugar'));
//checking for index of 'sugar' after index 5. If -1 then no such an index
console.log(ingridients.indexOf('sugar', 5));


// .reverse Reverses array

let books = ['harry', 'potter', 'szklany', 'tron', 'dwor', 'cierni', 'roz']
console.log(books)
console.log(books.reverse())

