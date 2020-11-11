//More specific one to handle specific problems

async function getPlanets(){
    try {
    const response = await axios.get('https://swapi.dev/api/planets')
    console.log(response.data)
    }   catch(e) {
        console.log('In catch method ', e)
    }

}

getPlanets()
//More general one for handling multiple errors

async function getPlanets2(){
    const response2 = await axios.get('https://swapi.dev/api/planets')
    console.log(response2.data)

}

getPlanets2().catch((error) => {
    console.log('In catch', error)
})