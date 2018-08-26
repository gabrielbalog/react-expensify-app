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

// database.ref().set({
// 	name: 'Gabriel Balog',
// 	age: 21,
// 	isSingle: true,
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

database.ref('isSingle')
	.remove()
	.then(() => {
		console.log('Data was removed');
	}).catch((e) => {
		console.log('Did not remove data.', e);
	});