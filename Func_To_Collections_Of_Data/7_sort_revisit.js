//arr.sort(compareFunc(a,b))

// If compareFunc(a,b) returns less than 0 ~~ sort a before b
// If compareFunc(a,b) returns 0 ~~ Leave a and b unchanged with respect to each other
// If compareFunc(a,b) returns greater than 0 ~~ sort b before a
const nums = [1, 44, 450.55, 999.98, 5021, 2, 811, 123, 10000]
const n = [1,2,3,,4,,6,6,6]
const sortBySize = (array) = array.sort((a, b) => a - b)