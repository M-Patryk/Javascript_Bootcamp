//Unpack values from arrays or from objects into their own seperate distinct variables

raceResults = [ 'Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5', 'Person 6' ];

//Tutaj definiujemy 3 zmienne, ktore odnosza sie do indexow "raceResults"
//Pod gold bedzie przypisany "Person 1"
//Pod silver bedzie przypisany "Person 2"
//Pod bronze bedzie przypisany "Person 3"
//A reszta pod nic
const [ gold, silver, bronze ] = raceResults;


// Jesli chcialbym przypisac indexy 1 i 4 tylko to moge to ominac dodajac przecinki
const [firstPlace, , ,fourthPlace] = raceResults;

//W przypadku jesli chcialbym tylko zwyciezce i reszte pod inna zmienna to
const [winner, ...others] = raceResults;