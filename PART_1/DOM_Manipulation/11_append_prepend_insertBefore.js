//Lets say we want to insert new element "li" at the end of li with innerText = 'Feed the alpacas'
//First I have to create new li I want to insert
const newLi = document.createElement('li');
newLi.innerText = 'THIS IS LI ELEMENT ADDED TO UL';

// Then I want to specify where i want to insert new LI
const parentUL = document.querySelector('ul#todos');
parentUL.appendChild(newLi);

//If i actually wanted to move it at the beginning:
const firstLiElement = document.querySelector('li.todo');
//And now simple command "insertBefore" (remember to first specify main element, when in parenthesis two args
//(what insertBefore, element before which new element will be added))
parentUL.insertBefore(newLi, firstLiElement);

//-----Another example-----
const newNewLi = document.createElement('li')
newNewLi.innerText = 'New new li'
//If i wanted to insert new new li before 3rd element
const thirdLi = document.querySelectorAll('ul#todos li')[2]
parentUL.insertBefore(newNewLi, thirdLi)


//---------------------------- // ----------------------------
//                   insertAdjascentElement          
//targetElement.insertAdjacentElement(position, element);
//      <!-- beforebegin -->
//      <p>
//          <!-- afterbegin -->
//          foo
//          <!-- beforeend -->
//      </p>
//      <!-- afterend -->

//So, new, random element first ("i in HTML mean italic - kursywa")
const i = document.createElement('i')
i.innerText = 'Tekst pisany kursywa - italic'
const firstP = document.querySelector('p')
i.setAttribute('class', 'biggerText')
firstP.insertAdjacentElement('afterbegin', i)


//----------------------- // -----------------------
//                 Append & prepend
//We can add to the end or at the beginning specific variables, even MULTIPLE of them at once!
//For example
//firstP.append(i, newNewLi) //OUTPUT i & newNewLi content will be shown at the end of "firstP"
//prepend works the other way around