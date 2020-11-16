fetch('https://swapi.dev/api/planets') //To jest promise
	.then((response) => {
		if (!response.ok) //jesli bedzie blad to wyswietl to
            throw new Error(`Status Code Error: ${response.status}`);
            
        return response.json() //else wyswietl response, czyli obiekt z tego URL w pierwszym fetch
        //TLDR w tym scopie -- request all the planets
    }) 
    .then((data) => { //Jak juz pierwszy fetch przejdzie to teraz 'then'
        const filmUrl = data.results[0].films[0]
        return fetch(filmUrl) //I tu znowu chcemy zeby pokazalo 'filmUrl'. Z racji tego, ze fetch jest 'Promise' mozna to return
    })
    .then((response) => {
        if (!response.ok) 
            throw new Error(`Status Code Error: ${response.status}`);
            
        return response.json()
    })
    .then((data) => {
        console.log('Fetched first film, based off of the first planet')
        console.log(data.title)
    })
	.catch((error) => {
		console.log('SOMETHING WENT WRONG!');
		console.log(error);
    });
    

//TLDR
// 1. Podajemy url
// Jesli w url bedzie blad to 2 linia sie wykona
// 3. Jesli wszystko ok to 9 sie wykona, czyli zmienna 'data' w fetch to bedzie caly ten obiekt z URL
// Tym samym deklaracja, results[0] to pierwsza planeta, a films[0] to pierwszy film w tym obiekcie planety
// Jesli wszystko bedzie ok w tym to sprawdzi to linia 13. Jesli okaze sie, ze ok to poleci dalej
// 4. 'data' tutaj to znowu 'filmUrl', ktory byl returned
// Wyswietlamy na koniec clg data.title, czyli tytul tego pierwszego filmu