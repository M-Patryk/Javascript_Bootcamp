const firstReq = new XMLHttpRequest();          //deklaracja zmiennej i tym samym funkcji do otrzymania zapytania 
firstReq.addEventListener('load', function() {  //Jesli sie powiedzie wszystko to deklarujemy zmienna 'data', ktora
    console.log('It worked');                   // jest przypisana do obiektu firstReq.responseText
    const data = JSON.parse(this.responseText) //lub firstReq.responseText
    console.log(data)

    for(let planet of data.results){ //Tutaj loop do wyswietlenia planet. Tak tylko dla przykladu
        console.log(planet.name)
    }
});

firstReq.addEventListener('error', () => { //Clg jesli sie nie powiedzie otrzymanie daty ze strony lub jakikolwiek inny error
	console.log('ERROR');
});

firstReq.open('GET', 'https://swapi.dev/api/planets'); //Zapytanie o otrzymanie daty
firstReq.send();    //wyslanie zapytania
