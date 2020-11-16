// Here all happens at the same time!
// Those are just not printed at the same time, but when are called.

async function get3Pokemons(){
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    const result = await Promise.all([prom1, prom2, prom3])
    printPokemonName(result)
}
function printPokemonName(result){
    for(pokemon of result){
        console.log(pokemon.data.name)
    }
}
get3Pokemons()