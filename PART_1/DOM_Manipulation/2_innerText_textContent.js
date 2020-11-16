const h1 = document.querySelector('h1');
h1.innerText; //type in console (prints "My Webpage")

document.body; //gives us all the text from page

let secondUl = document.querySelectorAll('ul')[1];


//There is also a second property we can use to access the inner text
//or rather the text content of an element "textContent"

//Difference is that innerText is going to be actually aware of whats on the page
//whereas innerContent will not. What is means is, it will show text that is hidden,
//will return commands like console.log and show the text exactly like it is in HTML file
