import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAE3js6gYdx7oLPutyPn3O7DOKSX88IJSE",
    authDomain: "expensify-dcc51.firebaseapp.com",
    databaseURL: "https://expensify-dcc51.firebaseio.com",
    projectId: "expensify-dcc51",
    storageBucket: "expensify-dcc51.appspot.com",
    messagingSenderId: "405952206703"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
	const val = snapshot.val();
	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fethcing', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3000);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10000);

// database.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val)
// 	}).catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().set({
// 	name: 'Gabriel Balog',
// 	age: 21,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'São Paulo',
// 		country: 'Brazil'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed');
// 	}).catch((e) => {
// 		console.log('Did not remove data.', e);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Campinas'
// });