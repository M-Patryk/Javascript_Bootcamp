function addingZeros(number, width){
    number = String(number)
    while(number.length < width){
        number = "0" + number 
    }
    return number
}

function Animals(cows, chickens, pigs){
    console.log(`You have: ${addingZeros(cows,3)} cows`)
    console.log(`You have: ${addingZeros(chickens,3)} chickens`)
    console.log(`You have: ${addingZeros(pigs,3)} pigs`)
}

Animals(4, 55, 133)