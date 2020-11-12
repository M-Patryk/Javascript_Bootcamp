function hex(r, g, b) {
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
	return `rgb(${r}, ${g}, ${b})`;
}
//So we make function
function makeColor(r, g, b) {
	const color = {};                   //This function creates an object which takes keys from function arguments
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {            //Then we add function to THIS object
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {            //And another function also to THIS object
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
	return color;                       //At the end we just return object
}

const firstColor = makeColor(255, 12, 77);  //Make some variable with random args
console.log(firstColor.hex())               //Asking for function that is inside function object declared ABOVE
firstColor.rgb()                            //Same what above


