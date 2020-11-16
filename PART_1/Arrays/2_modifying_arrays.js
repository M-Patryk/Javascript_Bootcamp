//push, pop, shift, unshift


//Printing array
let shoppingList = ['cheddar cheese', 'banana', '2% milk']
console.log(shoppingList, 'prints created array')

// Changing array's index value
shoppingList[2] = 'whole milk'
console.log(shoppingList, 'changed [2] in array')


//adding and removing last value from the array
let songs = [
    'You Will Not Hold me Down',
    'Feed the Machine',
    'Dim the Lights',
    'You Look Good Like That'
]
//push for adding
songs.push('Brother')
//pop for removing
songs.pop();

// adding, removing first value from the array

let dishesToDo = ['big plate']
//adding
dishesToDo.unshift('small plate')
dishesToDo.unshift('bowl')
dishesToDo.unshift('mug')


//removing
dishesToDo.shift()
dishesToDo.shift()

//adding multiple at once
dishesToDo.unshift('spoon', 'mug')
console.log(dishesToDo, 'added two at once. first spoon then mug. MUG adds first!')