//Lexical scope refers to the fact that nested functions are lexically bound to the parent of their outer function

function outer(){
    let movie = 'Krol Midas'
    function inner(){
        console.log(movie.toUpperCase())
    }
    inner()
}

//So we can't call inner from outside of the funcion outer
//It has to have some kind of connection, like being returned by outer function
//So i add 'inner()' to the code and then i can call 'outer()' in console to call 'inner()'
