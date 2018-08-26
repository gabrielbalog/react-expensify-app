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


database.ref('notes/-LKrURReOsKiVQHHfu9R').remove();

database.ref('expenses').push({
	description: 'Rent',
	note: '',
	amount: 10281281,
	createdAt: 39898189319
});

database.ref('expenses').push({
	description: 'Phone Bill',
	note: '',
	amount: 2823,
	createdAt: 832823
});

database.ref('expenses').push({
	description: 'Food',
	note: '',
	amount: 747247,
	createdAt: 828328
});

// database.ref('notes/-LKrURReOsKiVQHHfu9R').update({
// 	body: 'Buy food'
// });

// database.ref('notes').push({
// 	title: 'Another Note',
// 	body: 'This is my note'
// });

// const firebaseNotes = {
// 	notes: {
// 		jjdsjsdhdsh: {
// 			title: 'First Note',
// 			body: 'Second Note'
// 		},
// 		dijijfsjisji: {
// 			title: 'Another Note',
// 			body: 'This is my note'
// 		}
// 	}
// };

// const notes = [{
// 	id: '12',
// 	title: 'First Note',
// 	body: 'This is my note'
// }, {
// 	id: '9qie9ee',
// 	title: 'Another note',
// 	body: 'This is my note'
// }];

// database.ref('notes').set(note);
// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

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