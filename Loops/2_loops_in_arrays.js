// const examScores = [ 12, 45, 32, 88, 92, 87, 65, 100, 55 ];
// for (let i = 0; i < examScores.length; i++) {
// 	console.log(`Score of a student: ${examScores[i]}`);
// }

const myStudents = [
	{
		firstName : 'Patryk',
		grade     : 88
	},
	{
		firstName : 'Gabi',
		grade     : 100
	},
	{
		firstName : 'Kondi',
		grade     : 66
	},
	{
		firstName : 'Ewa',
		grade     : 32
	}
];

for (let i = 0; i < myStudents.length; i++) {
	console.log(`Student:${[ i + 1 ]} ${myStudents[i].firstName} // Grade:${myStudents[i].grade}`);
	//Lub cos takiego
	// let student = myStudents[i];
	// console.log(`${student.firstName} ${student.grade}`) // <-- Lepsza opcja imo
}

const word = 'somelongword';
let backWord = ''
for (let j = word.length - 1; j >= 0; j--) {
    backWord += word[j];
}
console.log(backWord)