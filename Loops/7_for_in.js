// For in iterates over values of the keys

const obiekt = {
    key1: 1235123,
    key2: 512,
    key3: 83452331,
    key4: 122211
}

for(let dane in obiekt){
    console.log(dane, obiekt[dane])
}

//If i wanted to sum the values
let sum = 0
for(let values in obiekt){
    sum += obiekt[values]
}
console.log(sum)