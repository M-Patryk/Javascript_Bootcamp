// recursion - the repeated application of a recursive procedure or definition.
// Other way to define whether a positive whole number is even or odd:
// zero is even // one is odd // for any number N, its evenness is the same as N - 2
//Define a recursive function isEven corresponding to this desc.
//A function should accept a single parameter (positive, whole number) and return a boolean.


function isEven(n){
    while(n != 0 || n != 1){
        n -= 2
        if(n === 0){
            return true
        }
        else if(n === 1 || n < 1){
            return false
        }
    }
}

console.log(isEven(50))