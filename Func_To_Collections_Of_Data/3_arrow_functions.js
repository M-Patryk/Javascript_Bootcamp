//Basically a shortcut to create functions.

//Longer version
const longer = function(x) {
	return x;
};

//Shorter version (nfn)
const shorter = (x) => {
	return x;
};

// Even shorter (works only with one condition and simple statements (return x))
const square = (x) => x * x;

const nums = [ 2, 4, 6, 8, 10, 12 ];
const doubles = nums.map((num) => {
	return num * 2;
});

//Shorter version
const doubles2 = nums.map((numb) => numb * 2);

//Writing more functions to get used to syntax
const triple = nums.map((num) => {
	return num * 3;
});

const quadruple = nums.map((num) => {
	return num * 3;
});

const quintuple = nums.map(num => {
    return num * 5
})