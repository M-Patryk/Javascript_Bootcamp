//push, pop, shift, unshift

let shoppingList = ['cheddar cheese', 'banana', '2% milk']
console.log(shoppingList, 'prints created array')

// modifying array
shoppingList[2] = 'whole milk'
console.log(shoppingList, 'changed [2] in array')


// adding new value at the last position || imo its wrong. we should use "push" method
shoppingList[shoppingList.length] = 'fries'
console.log(shoppingList, 'added fries to the last positon')


//adding and removing last value from the array
console.log('\n-----------ADD, REMOVE LAST VALUE -----------')
let songs = [
    'You Will Not Hold me Down',
    'Feed the Machine',
    'Dim the Lights',
    'You Look Good Like That'
]

songs.push('Brother')
console.log(songs)

songs.pop();
console.log(songs)

// adding, removing first value from the array
console.log(' \n----------ADDS, REMOVE FIRST VALUE----------')

let dishesToDo = ['big plate']
dishesToDo.unshift('small plate')
console.log(dishesToDo, 'adding small plate')
dishesToDo.unshift('bowl')
console.log(dishesToDo, 'adding bowl')
dishesToDo.unshift('mug')
console.log(dishesToDo, 'adding mug')

dishesToDo.shift()
console.log(dishesToDo, 'removing first item')
dishesToDo.shift()
console.log(dishesToDo, 'removing first item')

dishesToDo.unshift('spoon', 'mug')
console.log(dishesToDo, 'added two at once. first spoon then mug. MUG adds first!')