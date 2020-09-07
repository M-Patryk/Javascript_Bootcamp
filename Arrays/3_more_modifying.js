//Combines arrays
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



console.log('----------------Finding values------------------');
//Finding and checking value in arrays "includes" and "indexOf"
let ingridients = [ 'water', 'milk', 'two eggs', 'sugar', 'oil', 'flour', 'butter' ];
console.log(ingridients.includes('milk'));
console.log(ingridients.includes('two'));
console.log(ingridients.includes('water', 3), 'checks for value "water" after index 3');


//Finding values
console.log(ingridients.indexOf('sugar'), 'found sugar at index 3');
console.log(ingridients.indexOf('sugar', 5), '-1 means that it didnt find value');

console.log(
	ingridients.indexOf('butter') !== -1,
	'w tym przypadku sprawdza czy butter wystepuje, ale .includes robi to samo wiec uzywamy includes'
);
