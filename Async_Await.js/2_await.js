//Deklarujemy async funkcje i w niej dodajemy 'await'. Dziala to w taki sposob, ze funkcja czeka, az API jej odpowie
//i dopiero pozniej printuje response.data

async function getPlanets(){
    const response = await axios.get('https://swapi.dev/api/planets')
    console.log(response.data)
}