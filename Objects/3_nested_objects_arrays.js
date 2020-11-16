const student = {
	firstName : 'David',
	lastName  : 'Smith',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};

let avgScore = (student.exams['midterm'] + student.exams['final']) / 2;
//OR LIKE THIS
//let avgScore = (student.exams.midterm + student.exams.final) / 2;
console.log(avgScore);

// To access 'Art'
console.log(student.strengths[1]);


//Przyklad shopping carta
const shoppingCart = [
	{
		product  : 'Jenga',
		price    : 6.44,
		quantity : 1
	},
	{
		product  : 'Puzzle',
		price    : 2.11,
		quantity : 3
	},
	{
		product  : 'something',
		price    : 99.99,
		quantity : 5
	}
];
console.log(shoppingCart[0].price + shoppingCart[1].price + shoppingCart[2].price);


//Representing game board for tictactoe
const TTT = {
	player1 : {
		username  : 'Patryk',
		playingAs : 'O'
	},
	player2 : {
		username  : 'Gabi',
		playingAs : 'X'
	},
    board   : [ 
    [ 'X', null, 'O' ],
    [null, 'O', 'X'],
    [null, null, 'O'] ]
};
console.log(TTT.player1.username);
