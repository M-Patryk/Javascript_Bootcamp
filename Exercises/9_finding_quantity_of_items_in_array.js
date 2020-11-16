//.length at the end does the job!
const numbers = [1,2,3,4,5,1,2,1,2,3]
const findQuantityOfNumbers = numbers.filter(num => {
    return num === 1}).length