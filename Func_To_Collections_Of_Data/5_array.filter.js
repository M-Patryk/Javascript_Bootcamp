//Creates an array with all elements that pass the test implemented by the provided function

nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const onlyEven = nums.filter((n) => {
	return n % 2 === 0;
});
const onlyOdd = nums.filter((n) => {
	return n % 2 === 1;
});
const oddEven = onlyEven.concat(onlyOdd);
// Another example

const words = [ 'Ali', 'Aladin', 'Ciuciubabka', 'Wensz', 'Piecyk', 'Mitras', 'Bolo' ];
const longWords = words.filter((word) => {
	return word.length > 5;
});

const books = [
	{
		title   : 'Good Omens',
		authors : [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating  : 4.25,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'Changing My Mind',
		authors : [ 'Zadie Smith' ],
		rating  : 3.83,
		genres  : [ 'nonfiction', 'essays' ]
	},
	{
		title   : 'Bone: The Complete Edition',
		authors : [ 'Jeff Smith' ],
		rating  : 4.42,
		genres  : [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title   : 'American Gods',
		authors : [ 'Neil Gaiman' ],
		rating  : 4.11,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'A Gentleman in Moscow',
		authors : [ 'Amor Towles' ],
		rating  : 4.36,
		genres  : [ 'fiction', 'historical fiction' ]
	},
	{
		title   : 'The Name of the Wind',
		authors : [ 'Patrick Rothfuss' ],
		rating  : 4.54,
		genres  : [ 'fiction', 'fantasy' ]
	},
	{
		title   : 'The Overstory',
		authors : [ 'Richard Powers' ],
		rating  : 4.19,
		genres  : [ 'fiction', 'short stories' ]
	},
	{
		title   : 'The Way of Kings',
		authors : [ 'Brandon Sanderson' ],
		rating  : 4.65,
		genres  : [ 'fantasy', 'epic' ]
	},
	{
		title   : 'Lord of the flies',
		authors : [ 'William Golding' ],
		rating  : 3.67,
		genres  : [ 'fiction' ]
	}
];


//Search for books which have rating higher that "rating"
const ratingFilter = (rating) =>
	books.filter((book) => {
		if (book.rating > rating) {
			return book.title;
		}
	});


//Search for books which have specific genre
const genresFilter = (genres1, genres2) =>
	books.filter((book) => {
		return book.genres.includes(genres1) ||
		book.genres.includes(genres2);
	});


//Search for books which have specific string in the title
const searchName = (name) => books.filter(book => {
    return book.title.toUpperCase().includes(name.toUpperCase())
})