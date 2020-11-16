//Create a function that prints 8x8 chessboard. It has to print # or space and if it reaches 8 element in a row
//it has to make new line
// # # # #
//# # # #
// # # # #
//# # # # itd
let element = '';
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 8; j++){
        if(element.length%2 === 0){
            element += ' '
        }
        else{
            element += '#'
        }
    } 
element += '\n';
}
console.log(element);
