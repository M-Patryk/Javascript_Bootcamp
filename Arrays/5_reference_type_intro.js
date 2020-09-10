// Reference type czyli typ odniesienia
// Na ten moment poznalem dwa typy. Typ odniesienia do zwyklych zmiennych i typ odniesienia do tablic.
// W przypadku zmiennych wyglada to tak
let fruit = 'apple';
let otherFruit = fruit;
console.log(otherFruit, 'zmienna otherFruit'); // dostaniemy tutaj wynik 'apple'

// Jesli jednak zmienimy zmienna 'fruit' na inna wartosc:
fruit = 'pear';
console.log(fruit, "zmienna fruit po zmianie wartosci na 'pear'");

//To nasz 'otherFruit' ma stara wartosc 'apple'!
console.log(otherFruit, 'wartosc otherFruit');

//Inaczej sprawa ma sie w przypadku tablic!
let array = [ 4, 5, 6, 7 ];
let otherArray = array;
console.log(otherArray);

array.push(8);
console.log(array, 'zmienna "array" po dodatniu liczby');
console.log(otherArray, 'zmienna "otherArray" po zmianie "array"');

//Moral z tego taki, ze stringi i inty zostaja takie, jak zostaly zadeklarowane na poczatku,
//natomiast tablice aktualizuja sie

// -------------------const array ----------------------- //
//W przypadku kiedy uzywamy 'const' przy tworzeniu zmiennej tablicy mozemy do niej dodawac wartosci, odejmowac.. Praktycznie wszystko,
//OPROCZ wskazywania tej zmiennej dla tablicy na inna zmienna, czyli
const tablica = [ 'mleko' ];
tablica.push('ser'); //
console.log(tablica);
console.log(tablica.indexOf('mleko'));  // Te trzy linijki sa od tego zeby znalezc element 'mleko' w tablicy i go usunac
tablica.splice(0, 1);
console.log(tablica); // normalnie dodajemy i odejmujemy

//const tablica = ['mleko', 'ser'] //ALE JUZ PRZYPISAC JA JAKBY NOWA ZMIENNA JUZ NIE MOZEMY!!!
