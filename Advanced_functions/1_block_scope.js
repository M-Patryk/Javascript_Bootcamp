//What it shows is that variable with "var" is defined everywhere. It's not connected to specific block scope
animals = ['eel', 'bear', 'snake',]
for(var i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}
console.log(i)

// Another difference between "var" and "const" and "let" is that "var" can be redeclared
var liczba = 1
var liczba = 2
// Z let i const tak sie nie da!