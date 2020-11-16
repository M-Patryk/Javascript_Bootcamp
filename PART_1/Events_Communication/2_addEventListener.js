const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    alert('You clicked me!')
})

btn.addEventListener('click', () => {
    console.log('You clicked the button')
})

btn.addEventListener('mouseover', () => {
    btn.innerText = 'Mouseover'
})
btn.addEventListener('mouseout', () => {
    btn.innerText = 'JS way'
})

//This wont work in my case cause i have too few HTML elements so I cant scroll
window.addEventListener('scroll', function(){
    console.log('SCROOOOOOLIN')
})