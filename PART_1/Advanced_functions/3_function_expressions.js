//Funkcje mozemy deklarowac tez inaczej. Np tak, jak ponizej.
//Roznica jest taka, ze definiujemy funkcje w zmiennej, przez co pozniej mozemy podawac zmienne do innych funkcji

const square = function(num){
    return num * num
}

function addingNums(x,y){
    x = square(x)
    y = square(y)
    return x + y
}

console.log(addingNums(2,3))