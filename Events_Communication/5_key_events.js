//keypress, keyup, keydown

// keydown -- it does stuff when ANY key is PRESSED
// keyup -- it does stuff when ANY key is RELEASED
// keypress -- it does stuff when character SHOWS UP in the input. If it doesn't, it won't work.

const input = document.querySelector('#addItem');
const foodList = document.querySelector('#foodItems');

input.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		const newItemValue = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemValue;
		foodList.append(newItem);
		this.value = '';
	}
});
