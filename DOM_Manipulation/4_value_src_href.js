//If we want to get value from lets say "input type='text'" we use .value method
const inputs = document.querySelectorAll('input')

//Lets say we want to get value from type=text (its inputs[0] when im writing this)
inputs[0].value //remember to actually write something on web page to see how it works

//To see the value of type="checkbox" we use
inputs[2].checked

//value of type="range"
inputs[3].value

//hyperlink element
const a = document.querySelector('a')
a.href //shows the link

const img = document.querySelector('img')
img.src // gets us a src link. We can change it from here is we add "= 'and link here"
