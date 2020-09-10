//Wyszukiwanie wartosci w multidimensional arrays i jak dziala zmienianie wartosci w nich

const animalPairs = [ [ 'doe', 'stag' ], [ 'ewe', 'ram' ], [ 'peahen', 'peacock' ] ];

console.log(animalPairs);

console.log(animalPairs.indexOf('ewe')); //tak nie znajdziemy 'ewe' musimy dodac [1]
console.log(animalPairs[1].indexOf('ewe'));

animalPairs[0][1] = 'buck';
console.log(animalPairs); //na przegladarce tego nie widac! mamy 'buck' przed i po zmianie

//Dla przykladu takiego bardziej praktycznego

//   x  |   |  o
//  -------------
//   o  | x  |
//  -------------
//      | x |

// const tictactoe = [
//     ['x', null, 'o'],
//     ['o', 'x', null],
//     [null, 'x', null]
// ]
