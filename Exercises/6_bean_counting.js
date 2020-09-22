//Wrtie a function 'countBs' that takes a string as its only argument and returns a number that indicates
//how many uppercase B there are in the string
//Next, write a function called countChar that behaves like countBs, except it takes 2nd arugment that indicates the char
//that is to be counted. Rewrite countBs to make use of this new function

function countBs(string, char){
    let counter = 0
    for(i = 0; i <= string.length; i++){
        if(string[i] === char)
        counter += 1
    }
    return counter
}

console.log(countBs('Ali BaBa opens the gate', 'A'))