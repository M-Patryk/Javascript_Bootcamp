//Creates a blank JS object
//Links (sets the constructor of) this object to another object
//Passes the newly created object from Step 1 as this context
//Returns this if function doesnt return its own object

//We create FUNCTION with arguments and save arguments to variables
function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

//This is how functions are added
Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

//This is how functions are added
Color.prototype.hex = function(){
    const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//This is how functions are added
Color.prototype.rgba = function(a = 1){
    const {r, g, b} = this
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

//Creating new color
const color1 = new Color(255, 14, 75);

// Changing background color
document.body.style.backgroundColor = color1.rgba(0.7)