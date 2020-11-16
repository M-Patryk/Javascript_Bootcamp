//Google "event reference mdn " to get all usable events

//First way (better than 2nd but still not ideal)
const btn = document.querySelector('#btn');
btn.onclick = function() {
	alert('You clicked me');
};


//Second way. Check HTML. In this method you actually do everything in HTML file (worse than first)
//It is worse because we should not style and do JS in HTML just because the code starts to be cluttered and bad to read. 