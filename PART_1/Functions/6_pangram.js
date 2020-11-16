// Pangram is an sentence that contains every letter of an alphabet
// "The quick brown fox jumps over the lazy dog"
//Write a function which checks is the sentence contain everyword from the aplhabet

let alphabet = 'abcdefghijlmnoprsquvwxyz'

function isPangram(exp){
    for(letter of alphabet){
        if(!exp.includes(letter)){
            return false
        }
    }
    return true    
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))