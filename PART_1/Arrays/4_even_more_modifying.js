//slice, splice, sort

// .slice() cuts an array from the given range
let animals = [ 'shark', 'salmon', 'prawn', 'tortoise', 'giraffe', 'rhino' ];
// tnie od indexu 0 do 3
let swimmers = animals.slice(0, 3);
console.log(swimmers);
// tnie od indexu 3 do konca
let walkers = animals.slice(3);
console.log(walkers);

// ["shark", "salmon", "prawn", "tortoise", "giraffe", "rhino"]
//jedziemy od tylu, czyli: -1 "rhino" nie wliczamy, -2 "giraffe", -3 "tortoise", -4 "prawn"
let fromBackwards = animals.slice(-4, -1);
console.log(fromBackwards, 'this is with negative number');


//["shark", "salmon", "prawn", "tortoise", "giraffe", "rhino"]
//Adding "octopus" starting at index 1, removing 0 elements
console.log(animals, 'asdasdas')
animals.splice(1, 0, 'octopus');
//after adding octopus // ["shark", "octopus", "salmon", "prawn", "tortoise", "giraffe", "rhino"]

//splice
// now removing snake ["shark", "octopus", "snake", "salmon", "prawn", "tortoise", "giraffe", "rhino"]
animals.splice(2, 1);
console.log(animals);

//removing multiple
animals.splice(0, 3);
console.log(animals);

//replacing items
animals.splice(0, 2, 'whale', 'dolphin');
console.log(animals);

//sort mozna sortowac alfabetycznie, ale liczb juz tym nie sortujemy
let sortedAnimals = animals.sort();
console.log(sortedAnimals);

let nums = [ 3, 12, 1, 66, 100000, 777, 45 ];
let sortedNums = nums.sort();
console.log(sortedNums);
