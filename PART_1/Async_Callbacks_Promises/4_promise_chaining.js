//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmerelda' } ],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title : 'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];

			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			} else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users').then((res) => {
	const id = res.data[0].id;
	fakeRequest(`/users/${id}`).then((res) => {
		const topPost = res.data.topPostId;
		fakeRequest(`/posts/${topPost}`)
			.then((res) => {
				console.log(res.data.title);
			})
			.catch((error) => {
				console.log('OH NO!', error); //So if I make .catch here, it catches the error in this function scope, so if there is an error
				//lets say in line 42, because its 'post' instead of 'posts' it will print an error.
			});
	});
	//If i make catch here, it print an error in this function scope
}); //.catch((error) => {
//console.log('OH NO!', error')
//});

//ABOUT CATCHES!
//If I make a mistake in specific function scope and I dont make a catch in this scope i won't get any info back.

//All of the above is w/o chaining

//It can be done in much prettier and easier way.

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const topPost = res.data.topPostId;
		return fakeRequest(`/posts/${topPost}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((error) => {
		console.log('OH NO!', error);
	});
