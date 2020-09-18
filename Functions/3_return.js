// Function for boolean values

//Longer version

function isBlue(blue) {
	if (blue.toLowerCase() === 'blue') {
		return true;
	}
	return false;
}


//Shorter version
//This only works with boolean values tho
function isYellow(color) {
	return color.toLowerCase() === 'yellow';
}


//Another example of 'breaking from code with return'
function doesItMatch(array){
    for(let color of array){
        if(color === 'niebieski' || color === 'czerwony'){
            return true
        }
    }
    return false
}

console.log(doesItMatch(['czerwony','zolty', 'pomaranczowy', 'niebieski']))
// Nie wazne gdzie bedzie kolor w tablicy. W momencie kiedy znajdzie pasujacy obiekt to przerwie loopa, ifa, wszystko!