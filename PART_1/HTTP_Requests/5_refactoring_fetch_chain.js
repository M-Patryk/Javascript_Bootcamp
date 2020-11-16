//Jesli nie ma bledu to podaje dalej response.json() -- czyli obiekt 
const checkStatusAndParse = (response) => {
    if (!response.ok) 
            throw new Error(`Status Code Error: ${response.status}`);
            
    return response.json()
}

//Tutaj 'data' to jest 'key' w obiekcie wlasnie z tego return response.json(), bo wlasnie po 'checkStatusAndParse'
//wykonuje sie 'printPlanets', czyli pod 'data' podpisuje sie ten return
//Kiedy loop sie juz wykona to podajemy dalej 'data.next' z tego obiektu, czyli kolejny url
const printPlanets = (data) => {
    console.log('Loaded 10 more planets')
        for(planet of data.results){
            console.log(planet.name)
        }
    return Promise.resolve(data.next)
}

//dostajemy url z powyzszej funkcji i podajemy go dalej poprzez 'return fetch(url)'
const fetchMorePlanets = (url) => {
    return fetch(url)
}

fetch('https://swapi.dev/api/planets') 
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchMorePlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchMorePlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
	.catch((error) => {
		console.log('SOMETHING WENT WRONG!');
		console.log(error);
});