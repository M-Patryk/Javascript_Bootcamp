//Uzywamy ich kiedy np uzywamy funkcji i mamy dwie zmienne i jednej z tych dwoch zmiennych nie uzyjemy

//Przyklad
function multiply(a, b) {
    return a * b
}
//Normalnie gdybysmy nie wpisali "b" w odpowiedzi dostalibysmy "NaN"
//Dlatego mozemy sobie zdefiniowac "b" po to by w razie przypadku kiedy nie podamy drugiej zmiennej nie wywalilo nam "NaN"

function defaultMultiply(a, b = 1) {
    return a * b
}


//Another example
const greet = (person, greeting = 'hi') => {
    return `${greeting}, ${person}`
}

//Another example -- Dla przykladu, mozemy jako default parameter dodawac tablice, obiekty itd
const blah = (a, b = [1, 2, 3]) => {
    console.log(a, b)
}