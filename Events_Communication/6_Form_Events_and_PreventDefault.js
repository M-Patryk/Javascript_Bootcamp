const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const vegetablesSelection = document.querySelector('#vegetables')


form.addEventListener('submit', function(e) {
    console.log(creditCardInput.value)
    console.log(termsCheckbox.checked)
    console.log(vegetablesSelection.value)
    e.preventDefault();
});
