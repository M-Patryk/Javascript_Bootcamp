//EVERY test whether all elements in an array pass the provided function and it returns boolean value

const words = ['pig', 'dog', 'mug', 'bug', 'bag', 'wag']

const threeLetterWords = words.every(word =>{return word.length === 3})

const gEnding = (string) => string.every(word => {
    return word[word.length-1] === 'g'
})

//SOME is similar to "every" but it returns true if at least one element passes provided function
const isLetter = (array, letter) => array.some(word => {
    return word.includes(letter)
})