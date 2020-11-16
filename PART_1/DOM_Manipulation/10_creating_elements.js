const h2 = document.createElement('h2')

// To add something to it, use innerText

h2.innerText = "Hey! That's something!"

h2.classList.add('special')
// Right now this element is somewhere defined but it's not in HTML nor CSS

//To append it we use "append"
//Let's say i want it to be in HTML element 'section'
const section = document.querySelector('section')

// Now to add it...
section.appendChild(h2)


// ------Another example--------
const newImg = document.createElement('img')
newImg.src = 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ'
newImg.classList.add('smallImg')
document.body.appendChild(newImg)


//Aaaaand another one
const newLink = document.createElement('a')
newLink.href = 'https://www.google.com'
newLink.innerText = 'Google main site'

const firstP = document.querySelector('p')
firstP.appendChild(newLink)