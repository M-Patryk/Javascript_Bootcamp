// Rest parameter collects all remaining arguments into an actual array

// function sumAllArguments(...args){
//     let total = 0 
//     for(num of args){
//         total += num
//     }
//     return total
// }

//Using reduce for practice
function sumArgs(...args){
    return args.reduce((total, currentValue) => {
        return total + currentValue
    })
}

