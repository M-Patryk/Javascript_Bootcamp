// It takes an array of values and then reduces them down to a single value
//Applications for reduce include things like: 
// ** summing, multiplying, accumulating every element in an array
// ** finding max value in entire array (Math.max takes values, not variables! so it wont work with array)
const nums = [1, 2, 4, 5, 6, 7, 8, 9]

const multiplyItemsInArray = (array) => array.reduce((total, currentVal) => {
    return total * currentVal
})


//Example with normal (not arrow function)
function multi(array) {
    return array.reduce(function (a, b) {
        return a * b
    })

}


//-----------------MORE EXAMPLES-----------------
//Finding the largest value
const grades = [1, 66, 22, 67, 87, 31, 15, 91, 41, 77]

const findMax = (array) => array.reduce((max, currentValue) => {
    if (currentValue > max) {
        return currentValue
    }
    return max
})

//Using Math.max
const findMax2 = (array) => array.reduce((max, currentValue) => {
    return Math.max(max, currentValue)
})
//Jesli chcialbym najmniejsza to albo zamienic znaki w pierwszej funkcji, albo zmienic na Math.min


//Mozna tez dodac trzecia zmienna na samym koncu to return i } jako wartosc poczatkowa
const isLarger = (array) => array.reduce((max, currentValue) => {
    return Math.max(max, currentValue)
}, 88)


// ------------ TALLYING (zliczanie) ------------
//Na samym początku tally jest obiektem (patrz linijka 55), a currentValue jest 'y'
const votes = ['y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'n', 'y', 'n', 'y', 'n', ]
const countVotes = votes.reduce((tally, currentValue) => {
    if (tally[currentValue]) {
        tally[currentValue]++
    } else {
        tally[currentValue] = 1
    }
    return tally
}, {})

const results = votes.reduce((tally, val) => {
    return tally[val] = (tally[val] || 0) + 1
}, {})


// ------------ Example with books -------------
const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    },
    {
        title: 'Bad book',
        authors: ['Saviour Time'],
        rating: 2.21,
        genres: ['fiction', 'garbage']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        rating: 4.65,
        genres: ['fantasy', 'epic']
    },
    {
        title: 'Lord of the flies',
        authors: ['William Golding'],
        rating: 3.67,
        genres: ['fiction']
    }
];

//So what we want is to copy the books to another object, but group them by rating. Więc wszystkie, ktorej maja rating > 3 ida
//do jednego obiektu, wszystkie > 4 ida do innej itd

const groupBooks = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating) //Bierzemy ksiazke, sprawdzamy jej rating i zakraglamy w dol
    //Sprawdzamy tutaj czy w ogole jest tablica z ratingiem dla ksiazki
    if (!groupedBooks[key]) {
        groupedBooks[key] = []       //Jesli nie ma, to tworzymy tablice
    }
    groupedBooks[key].push(book)        //Jesli jest to kopiujemy cala ksiazke
    return groupedBooks
}, {})