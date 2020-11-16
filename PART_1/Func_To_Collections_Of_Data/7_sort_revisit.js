//arr.sort(compareFunc(a,b))

// If compareFunc(a,b) returns less than 0 ~~ sort a before b
// If compareFunc(a,b) returns 0 ~~ Leave a and b unchanged with respect to each other
// If compareFunc(a,b) returns greater than 0 ~~ sort b before a
const nums = [1, 44, 450.55, 1, 999.98, 5021, 2, 811, 123, 10000]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const sortAscendingOrder = (array) => array.slice().sort((a, b) => {
    return a - b
})
const sortDescendingOrder = (array) => array.slice().sort((a, b) => {
    return b - a
})
//Note: To copy an array use .slice() or arr2 = [...nums]
// !!! --- !!! If I do any of the functions above w/o .slice() then the "nums" will be sorted as variable. 
//What is means is that numbers in the "nums" array WOULD NOT be mixed up, like they are right now in line 6!

//Another example // Lets sort them by rating
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

const sortByRating = (array) => array.sort((a,b) => a.rating - b.rating )
