// One way -- await in sequence

// async function get3Pokemons(){
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//     console.log(poke1)
//     console.log(poke2)
//     console.log(poke3)
// }



//This way is BETTER. its massive difference! -- await in parallel
// If something is not needed to do them in sequence (one after another, do them in parallel!)

async function get3Pokemons(){
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    const poke1 = await prom1;
    const poke2 = await prom2;
    const poke3 = await prom3;
    console.log(poke1)
    console.log(poke2)
    console.log(poke3)
}

get3Pokemons()

// ---------------------More 'visual' way how things work ---------------------
const changeBodyColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

//Sequential
//Tutaj, kolory pokazuja sie po kolei, a tego raczej w requestach nie chcemy. Lepiej byloby miec wszystko na raz i pozniej tylko
//pobierac to co chcemy, dlatego parallel jest lepszy w przypadku requestow

// async function lightShow(){
//     await changeBodyColor('teal', 1000)
//     await changeBodyColor('red', 1000)
//     await changeBodyColor('yellow', 1000)
//     await changeBodyColor('black', 1000)
// }

//Parallel
//Tutaj wszystko sie dzieje na raz!
async function lightShow(){
    const color1 = changeBodyColor('teal', 1000)
    const color2 = changeBodyColor('red', 1000)
    const color3 = changeBodyColor('yellow', 1000)
    const color4 = changeBodyColor('black', 1000)
    const c1 = await color1;
    const c2 = await color2;
    const c3 = await color3;
    const c4 = await color4;

}

lightShow()