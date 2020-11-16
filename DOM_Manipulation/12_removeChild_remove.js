//Najpierw zaznaczenie elementu, z ktorego usuwam
const ul = document.querySelector('section ul')
const removeSecondLi = ul.querySelectorAll('li')[1]
//Mozna uzyc removeChild(). Trzeba podac parenta, a w nawiasie co chcemy usunac. 
// ul.removeChild(removeSecondLi)

//Lub nowego remove(). Tutaj wystarczy podac zmienna, ktora chcemy usunac
const removedSecondLi = emoveSecondLi.remove()
removedSecondLi.append()