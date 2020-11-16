//Write a function that returns avg from an array of numbers

function avg(array){
    avgScore = 0
    for(let i=0; i < array.length; i++){
        avgScore += array[i]
    }
    return avgScore / array.length
}
console.log(avg([0,50, 25, 100, 12, 33, 51, 1]))

//Same, but different
function avg1(array){
    avgScore = 0
    for(num of array){
        avgScore += num
    }
    return avgScore / array.length
}
console.log(avg1([1,2,3,4,5,6,7]))