// For of iterates over keys, properties

const gameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];
let sum = 0;
for (let row of gameBoard) {
    console.log(row)
	for (let index of row) {
        console.log(index);
        sum += index;
    }
}
console.log(`All items summed: ${sum}`)

// let jakisString = 'patrykmajchrzak';
// for(let char of jakisString){
//     console.log(char)
// }

//This method is good but not always. For example:
let words1 = ['milk', 'shake', 'cheese', 'yoghurt']
let words2 = ['bun', 'bread', 'biscuit', 'pie']

//So now if we wanted to print indexes together so items at position 0 from both and then at pos 1 from both and so on
// We couldnt do it with for of loop. We would use std loop instead
for(let i = 0; i <= words1.length; i++){
    console.log(words1[i], words2[i])
}