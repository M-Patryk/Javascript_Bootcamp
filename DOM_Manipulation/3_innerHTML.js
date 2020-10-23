// It's going to retrive not only all of text inside given element but also
// all of of HTML elements inside it

const formElement = document.querySelector('form')
formElement.innerHTML
//OUTPUT -- prints string that contains all of the elements inside it
//"
// <input type="text" placeholder="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit">
//"

const h1 = document.querySelector('h1')
h1.innerHTML += '<b> is cool </b>' // so we can acutally add HTML elements through it


