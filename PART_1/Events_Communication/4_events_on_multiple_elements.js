//I want to loop over all of these colors and create a div on a page with that background color
const colors = [ 'red', 'green', 'orange', 'purple', 'pink', 'yellow', 'black', 'teal' ];
const printColor = function(){
    const h1 = document.querySelector('h1')
    h1.style.color = this.style.backgroundColor
}

for(color of colors){
const makeDiv = document.createElement('div')
makeDiv.style.backgroundColor = `${color}`
makeDiv.classList.add('box')
const sectionElement = document.querySelector('#boxsection')
sectionElement.append(makeDiv)

//If i wanted to print color of specific box, the code would look like this
makeDiv.addEventListener('click', printColor)
}
