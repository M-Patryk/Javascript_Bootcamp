//Defining class
class Color {
    //ALWAYS constructor at the beginning.
    constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
        this.name = name;
        //function clacHSL() runs immediately after class creation
		this.calcHSL();
    }
    //Function returns hsl string
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h}, ${s}%, ${l}%)`;
    }

    //Function that changes HSL hue and saturation
	oppositeHSL() {
		const { h, s, l } = this;
		let newHue = (h + 180) % 360;
		let newSaturation = (s + 50) % 100;
		return `hsl(${newHue}, ${newSaturation}%, ${l}%)`;
    }
    
    //Function that takes r, g, b values and put them into string
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
    }
    
    //Function that takes innerRGB() function and returns rgb function 
	rgb() {
		return `rgb(${this.innerRGB()})`;
    }

    //Function that takes innerRGB() function and returns rgba function 
	rgba(a = 1.0) {
		return `rgb(${this.innerRGB()}, ${a})`;
    }
    
    //Function that changes rgb color string into hex color string 
	hex() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    
    //Function that calculates RGB color into HSL color 
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		// Calculate hue
		// No difference
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;

		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

//Defining two random variables for testing purposes
const red = new Color(255, 64, 1, 'tomato');
const white = new Color(255, 255, 255, 'white');
