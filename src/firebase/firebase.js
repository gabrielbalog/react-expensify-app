import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider,  database as default };

// database.ref('notes/-LKrURReOsKiVQHHfu9R').remove();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses)
// });

// database.ref('expenses').once('value', (snapshot) => {
	// const expenses = [];

	// snapshot.forEach((childSnapshot) => {
	// 	expenses.push({
	// 		id: childSnapshot.key,
	// 		...childSnapshot.val()
	// 	});
	// });

// 	console.log(expenses)
// });

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 10281281,
// 	createdAt: 39898189319
// });

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