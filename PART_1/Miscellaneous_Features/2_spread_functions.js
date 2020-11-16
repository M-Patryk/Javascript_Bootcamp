// spread -- An iterable such as an array to be EXPANDED in places like FUNCTION CALL, ARRAY LITERALS, OBJECT LITERALS
//Czyli te nieszczesne [...arr]

//Przyklad
const nums = [1, 2, 3, 4, 56, 7, 21, 99, 76, 41, 22]
console.log(Math.max(...nums))


//Another example
const colors = ['red', 'green', 'blue', 'yellow']

function gimmeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

gimmeFour(...colors)

//Mozna tez sie bawic ze stringami 
const str = 'COWS'

gimmeFour(...str)