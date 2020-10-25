//Few things to remember.
// -- In JS we don't have same properties, like in CSS. What it means that,
// property from CSS 'background-color' will not have dash but camel case 'backgroundColor'

// Another thing is that if we change something through JS we will change CSS property to HTML file
// so it won't change property in CSS but add it to HTML (we don't want styling in HTML)

//Third thing is that if we want to change multiple properties we have to do it separately

//Fourth thing is that you cant check through JS what styles have specific parameters (it shows them as empty strings)
const p = document.querySelector('p');
p.style.backgroundColor = 'black';
p.style.color = 'white';

//Small example of changing color of all six lis i have

const colors = [ 'red', 'blue', 'pink', 'green', 'yellow', 'orange' ];
const allLis = document.querySelectorAll('li');

function changeLiColors() {
	allLis.forEach((li, idx) => {
		const color = colors[idx];
		li.style.color = color;
	});
}
