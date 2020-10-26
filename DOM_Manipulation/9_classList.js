const todo = document.querySelector('.todo');

//I made new, seperate class in CSS called .done

// NOT IDEAL METHOD!
//I can add class ".done" to .todo class by using "setAttribute"
//I set attribute class to be '.todo' AND ' .done'
//todo.setAttribute('class', todo.getAttribute('class') + ' done');

//Or i can just set 'class' to be '.done' and nothing else

//-----------------OOOOOOOOOR-------------------
//I can use other, BETTER option that is classList
//This line ADDS new class 'done' to 'todo'
todo.classList.add('done')

//I can toggle (on off) it thanks to toggle() method
todo.classList.toggle('done')