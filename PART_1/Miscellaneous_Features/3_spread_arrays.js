const birds = ['crow', 'hummingbird', 'parrot', 'sparrow']
const mammals = ['human', 'whale', 'dog', 'cat']
const reptiles = ['lizard', 'crocodile', 'frog', 'cameleon']

// const animals = [...birds, ...mammals, ...reptiles]

//Mozna tez dodawac w "trakcie" tworzenia np

const animals = [...birds, 'lion', ...mammals, 'turtle', ...reptiles]

//We can copy array BUT ITS ONLY 1 LEVEL DEEP. What it means is that we wont copy nested arrays
nestedAnimals = ['spider', ['hairy fright', ['badboy']]]
const array = [...mammals, ...nestedAnimals]