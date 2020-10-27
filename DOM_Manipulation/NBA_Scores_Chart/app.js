const warriorsGames = [
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 106,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 105,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 127,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 126,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 85,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : 'Houston',
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 98,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 115,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 86,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 101,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 92,
			isWinner : false
		}
	}
];

//Code
//Napisac kod aby wyswietlal w liscie:
//--kto z kim gral,
//--jaki byl wynik (lepszy wynik pogrubiona czcionka)
//--kolor zielony jesli wygrali "Golden State", czerwony jesli nie

//----------First we have to display games somehow ----------
// We create 'ul' to put games inside it
const parentUl = document.createElement('ul');
// Using loop we add all games to "ul" as 'li'
for (let game of warriorsGames) {
	//Destructuring so we don't have to write game.awayTeam, game.homeTeam etc
	const { awayTeam, homeTeam } = game;
	const { team: aTeam, points: aPoints } = awayTeam;
	const { team: hTeam, points: hPoints } = homeTeam;

	//Li element in which games are going to be put in
	const gameLi = document.createElement('li');

	//What every 'li' should show
	const teamNames = `${aTeam} @ ${hTeam}`;

	//If zeby pogrubialo wynik, ktory jest wiekszy. Przed ifem trzeba zadeklarowac teamScores jako LET, bo inaczej jest problem ze "scope"
	let teamScores;
	if (aPoints > hPoints) {
		teamScores = `<b>${aPoints}</b>-${hPoints}`;
	} else {
		teamScores = `${aPoints}-<b>${hPoints}</b>`;
	}

	//Ustawianie koloru (CSS class) Jesli "Golden State" wygrywa ma byc zielony, jesli przegrywa czerwony
	//Nowa zmienna, ktora sprawdza czy hTeam to "Golden State". Jesli tak to warriors = homeTeam (object key), jesli nie jest
	//"Golden State" to musi byc ten drugi "Golden State", czyli warriors = awayTeam (i znowu odniesienie do obiektu)
	const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;

	//We add specified info as 'li'
	gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
	gameLi.innerHTML = `${teamNames} ${teamScores}`;

	//And at the end we add every 'li' we created to 'ul'
	parentUl.append(gameLi);
}
//Here i add 'ul' to HTML so it shows up on site
document.body.prepend(parentUl);
