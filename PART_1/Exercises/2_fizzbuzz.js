//Write a program that prints numbers 1 - 100 but it prints 'Fizz' for all numbers divisible by 3
// and 'Buzz' for nums divisible by 5 and not 3
//And for numbers divisible by 3 and 5 'FizzBuzz'
for(let i= 1; i < 101; i++){
    if(i%5 ===0  && i%3 === 0){
        console.log('FizzBuzz')}
    else if(i%3 === 0){
        console.log('Fizz')}
    else if(i%5 ===0  && !i%3 === 0){
        console.log('Buzz')}
    else{
    console.log(i)}
}

