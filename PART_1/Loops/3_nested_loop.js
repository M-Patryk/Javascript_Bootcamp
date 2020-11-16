//Nested loops

for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('   INNER LOOP:', j);
	}
}

//Dziala to w taki sposob, ze kod dochodzi do pierwszej petli, wykonuje jeden loop, idzie do nastepnej,
// a nastepna wykonuje sie tak dlugo az sie nie skonczy. I pozniej znowu wraca do zewnetrznej, wykonuje sie raz
// i wchodzi w wewnetrzna

//Przyklad

const gameBoard = 
    [
        [ 4, 32, 8, 4 ],
        [ 64, 8, 32, 2 ],
        [ 8, 32, 16, 4 ],
        [ 2, 8, 4, 2 ]
    ];
let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
	// console.log(gameBoard[i]) //po zewnetrznej dostajemy tylko RZEDY
	let row = gameBoard[i];
	for (let j = 0; j < row.length; j++) { //po wewnetrznej wartosci w poszczegolnych rzedach
		totalScore += row[j];
	}
}
console.log(totalScore);