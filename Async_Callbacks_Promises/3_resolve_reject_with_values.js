const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{
						id       : 1,
						username : 'Bilbo'
					},
					{
						id       : 5,
						username : 'Baggins'
					}
				],
				'/about' : 'This is about page'
			};
			const data = pages[url]; //To jest zmienna, ktora zmienia sie od podanego URL w linii 27. W przypadku kiedy podamy /about
			//w linii 27, data bedzie miala wartosci linii 15, jesli podamy /user bedzie miala wartosc linii 5
			if (data) {
				resolve({ status: 200, data }); //Mozemy podac aby funkcja zwracala jakies wartosci
			} else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => { //res to jest ten obiekt w resolve i reject
		console.log('Status Code: ', res.status); //ktore sa pozniej tutaj przyzywane
		console.log('Data: ', res.data);
		console.log('REQUEST WORKED');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});
