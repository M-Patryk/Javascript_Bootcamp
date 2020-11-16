const rangeAtt = document.querySelector('input[type="range"]')

rangeAtt.getAttribute('max') //Shows what is the SET value of "max" in this example //OUTPUT: 500

rangeAtt.setAttribute('min', '-500') //Sets given value to an element

//We can even change TYPE of the attribute thanks to setAttribute
const checkbox = document.querySelector('input[type="checkbox"')
checkbox.setAttribute('type', 'radio')
