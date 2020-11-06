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
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //Mozemy podac aby funkcja zwracala jakies wartosci
			} else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest('/about')
	.then((res) => { //res to jest ten obiekt w resolve i reject
		console.log('Status Code: ', res.status); //ktore sa pozniej tutaj przyzywane
		console.log('Data: ', res.data);
		console.log('REQUEST WORKED');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});
