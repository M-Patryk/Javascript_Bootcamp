//The function returns first found provided value

const movies = [ 'The fantastic Fox', 'Mr. Bean', 'Mr. and Mrs. Ms', 'Mrs. Qnn' ];
const findSentence = (string) => movies.find(sentence => {return sentence.includes(string)})

const findSentence2 = (string) => movies.find((sentence) => {
    if(sentence.includes(string) == true)
        return sentence.indexOf(string) === 0
    
})


//Another example

const books = [{
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    rating: 4.25
 },
 {
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    rating: 4.66
 },
 {
    title: 'Throne of Glass',
    author: 'Sarah J. Maas',
    rating: 4.88
 },
 {
    title: 'Lalka',
    author: 'Nie pamietam',
    rating: 2
 }
]

//We can do something like finding book with good score

const goodRating = books.find(book => {
        return book.rating >= 4.5
    }
)

const findBookWithAuthor = books.find(book => {
    return book.author.includes('Sarah J. Maas')
})