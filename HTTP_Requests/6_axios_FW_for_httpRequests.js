// https://github.com/axios/axios

//Axios jest frameworkiem, ktory pomaga w HTTP requestach. Jest bardziej przejrzysty i lepszy w uzyciu niz vanilla js.

//Dobre np w tym jest to, ze w tym przypadku nie musimy "parse" obiektu, bo dziala lepiej niz fetch
//Nie trzeba tworzyc 'errora' w przypadku zlego adresu, downed api zeby catch mogl to zlapac
//Przykladowo

axios
    .get('https://swapi.dev/api/planets')
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.log('CATCH IN ACTION')
        console.log(error)
})