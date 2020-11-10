// Standardowo zbieramy url do next page / url = https... czyli w razie nie podania url wykona sie ten zadany
const getNextPlanetsUrl = (url = 'https://swapi.dev/api/planets') => {
	console.log(url);
	return axios.get(url);
};


// Prinujemy planety. Nalezy pamietac aby na koncu podac dalej nastepna strone do planet. Promise.resolve(data.next)
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next)
};

getNextPlanetsUrl()
	.then(printPlanets)
	.then(getNextPlanetsUrl)
	.then(printPlanets)
    .then(getNextPlanetsUrl)
    .then(printPlanets)
	.catch((err) => {
		console.log('Error', err);
	});
