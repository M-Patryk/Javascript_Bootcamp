const btn = document.querySelector('#btn');
btn.addEventListener('mouseover', function() {
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', () => {
	btn.innerText = 'You clicked me!';
	document.body.style.backgroundColor = 'green';
});
