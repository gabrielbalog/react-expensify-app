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

database.ref().set({
	name: 'Gabriel Balog',
	age: 21,
	isSingle: true,
	location: {
		city: 'São Paulo',
		country: 'Brazil'
	}
}).then(() => {
	console.log('Data is saved');
}).catch((e) => {
	console.log('This failed.', e);
});

// database.ref().set('This is my data');

// database.ref('age').set(22);
// database.ref('location/city').set('Santo André');

database.ref('attributes').set({
	height: 1.80,
	weight: 80	
}).then(() => {
	console.log('Data is saved');
}).catch((e) => {
	console.log('This failed.', e);
});