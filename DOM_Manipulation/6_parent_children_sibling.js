// -- parentElement
// -- children
// -- nextSibling
// -- previousSibling


//So we check in what ELEMENT is current ELEMENT
const firstLi = document.querySelector('li')
firstLi.parentElement //in console  //OUTPUT: <ul>...</ul>
firstLi.parentElement.parentElement //in console  //OUTPUT: body

//Opposite to parent is CHILDREN so we move INSIDE specific ELEMENT
//In this case, "li" doesn't have any children, but "ul" has "li's"

const ul = document.querySelector('ul')
ul.children // shows all the "li's" this "ul" has

//We also have "nextElementSibling" & "previousElementSibling"
//Straight forward stuff
firstLi.nextElementSibling.nextElementSibling //Gets us its SECOND NEXT SIBLING