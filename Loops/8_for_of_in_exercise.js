let array = ['pies', 'kot', 'zolw', 'mysz', 'ptak', 'osmiornica']

let position = 0
for(item of array){
    
    console.log(`Przedmiot ${position}: ${item}`)
    position += 1
}

for(item in array){
    console.log(array[item])
}


let shoppingList = [
    {
        item: 'onion',
        price: 1.66
    },
    {
        item: 'potato',
        price: 0.88
    },
    {
        item: 'apple',
        price: 3.99
    },
    {
        item: 'watermelon',
        price: 12.83
    },
    {
        item: 'butter',
        price: 5.16
    }
]

for(let i = 0; i < shoppingList.length; i++){
    console.log(`Item: ${shoppingList[i].item} \nPrice: ${shoppingList[i].price}`)
}