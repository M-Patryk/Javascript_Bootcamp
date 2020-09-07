//slice, splice, sort

// .slice() cuts an array from the given range
let animals = [ 'shark', 'salmon', 'prawn', 'tortoise', 'giraffe', 'rhino' ];
let swimmers = animals.slice(0, 3);
console.log(swimmers);
let walkers = animals.slice(3);
console.log(walkers);


// ["shark", "salmon", "prawn", "tortoise", "giraffe", "rhino"]
let fromBackwards = animals.slice(-4, -1);
console.log(fromBackwards, 'this is with negative number');

console.log('\n----------- Remove/Replace elements-----------');
console.log(animals);
animals.splice(1, 0, 'octopus', 'snake');
console.log(animals, 'this is after adding octopus and snake');


// now removing snake ["shark", "octopus", "snake", "salmon", "prawn", "tortoise", "giraffe", "rhino"]
animals.splice(2, 1);
console.log(animals);

//removing multiple
animals.splice(0,3)
console.log(animals)

//replacing items
animals.splice(0, 2, 'whale', 'dolphin')
console.log(animals)