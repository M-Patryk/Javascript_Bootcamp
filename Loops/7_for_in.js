// let array1 = ['pies', 'kot','zolw','osmiornica']
// for(item in array){
// console.log(item)   
//}
// expected output: 0
// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4
// Czyli printuje "keys", ale mozna wykorzystac to do podawania wartosci, jak ponizej
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