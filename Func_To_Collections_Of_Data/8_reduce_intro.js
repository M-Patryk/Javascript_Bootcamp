// It takes an array of values and then reduces them down to a single value
//Applications for reduce include things like: 
// ** summing, multiplying, accumulating every element in an array
// ** finding max value in entire array (Math.max takes values, not variables! so it wont work with array)
const nums = [1, 2, 4, 5, 6, 7, 8, 9]

const multiplyItemsInArray = (array) => array.reduce((total, currentVal) => {
    return total * currentVal
})


//Example with normal (not arrow function)
function multi(array) {
    return array.reduce(function (a, b) {
        return a * b
    })
    
}