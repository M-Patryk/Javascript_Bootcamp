//  Feline - relating to cats || Canine - relating to dogs
//We can't copy nested arrays
const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    furry: true,
    family: 'Caninae'
}


//Example
const dog = {
    ...canine,
    isPet: true,
    isAdorable: true
}
console.log('dog', dog)

const catDog = {
    ...canine,
    ...feline
}
//Another example (order matters) If we had object with 3 legs and we copied object that has 4 legs it would override the "3 leg object"
//So to avoid such a incidents we have to override legs at the end
const triLeg = {
    ...feline,
    legs: 3,
    isFluffy: true
}
console.log('triLeg', triLeg)


//We can copy variables, like in array example
const catDogClone = {
    ...catDog
}
console.log('catDog', catDog)

//We can spread array or string into object
console.log('spread array into object', {
    ...[4, 5, 6]
})
console.log('spread string into object', {
    ...'qwerty'
})

//We can also spread objects into arrays
const randomStuff = [...'somearray', {...catDog}]
console.log(randomStuff)