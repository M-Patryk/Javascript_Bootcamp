const runners = [
	{
		first   : 'Patryk',
		last    : 'Majchrzak',
		country : 'Poland'
	},
	{
		first   : 'Gabrysia',
		last    : 'Kowalik',
		country : 'Azerbeijan'
	},
	{
		first   : 'Gabi ',
		last    : 'Majchrzak',
		country : 'England'
	}
];

//W przypadku kiedy chcielibysmy dostac "country" z drugiego obiektu w miec to wrzucone w tablice
const [ , { country: kraj }, { first: bronzeWinner } ] = runners; //Wazne jest aby dodac ten przecinek,
//bo wlasnie tak sie dostajemy do drugiego obiektu w tej tablicy

//Ten zapis moze byc troche klopotliwy jesli mielibysmy o wiele wiecej nested obiektow, dlatego warto rozbic to na dwie linijki
const [ , silverWinner ] = runners;
const { country: pochodzenie } = silverWinner;
