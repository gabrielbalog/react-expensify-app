const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('This is my resolve data');
		// resolve('This is my other resolve data');
		resolve({
			name: 'Gabriel',
			age: 21
		});
		reject('Something went wrong');
	}, 1500);
});

console.log('before')

promise.then((data) => {
	console.log('1',data);

	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('This is my other resolve data');
		}, 1500);
	});
})then((str) => {
	console.log('does this run?', str);
}.catch((error) => {
	console.log('error: ', error);
});


console.log('after')