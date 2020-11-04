//HARDCODDED, wrong version
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const vegetables = document.querySelector('#vegetables');

const formData = {};
// creditCardInput.addEventListener('input', function(e){
//     formData['cc'] = e.target.value
// })

// termsCheckbox.addEventListener('input', function(e){
//     formData['termsBox'] = e.target.checked
// })

// vegetables.addEventListener('input', function(e){
//     formData['vegetables'] = e.target.value
// })

//BETTER WAY THAN THE ABOVE

for (let input of [ creditCardInput, termsCheckbox, vegetables ]) {
	input.addEventListener('input', ({ target }) => {
		//tutaj dalej jest "e", ale "e" ma wiele obiektow, a jednym z nich jest target,
		// bo to tam jest przechowywana zmienna "value" i "checked"
        //Co wiecej, moglbym zmienic "input" na "change" i wtedy jakbym pisal w credicard inpucie to w obiekcie zapisywaloby sie
        //dopiero albo po kliknieciu ENTER, albo jakbym wyszedl z creditCard inputa np myszka w blank space

		//I znowu destrukturyzacja. Chce tylko kilka zmiennych, nic wiecej, dlatego:
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value;
		console.log(formData);
	});
}
