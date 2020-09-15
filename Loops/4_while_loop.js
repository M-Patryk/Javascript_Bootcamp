//Some "work" upfront and then inside the loop
let num = 0;
while (num <= 5) {
	console.log(num);
	num++;
}

//We usually use "while loop" if we dont know exactly how many times we will run it
//Like the 2048 game. You move square till there is no more moves left

//Guess game as an example
const randomNumber = Math.floor(Math.random() * 10 + 1);
let checkingNumber = Math.floor(Math.random() * 10 + 1);
let counter = 0
while (checkingNumber !== randomNumber) {
	checkingNumber = Math.floor(Math.random() * 10 + 1);
    console.log(`Random number: ${randomNumber} // Checking number: ${checkingNumber}`);
    counter++;
}
console.log('This is over. You win!')
console.log(`Tries to find the correct number: ${counter}`)