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

firebase.database().ref().set({
	name: 'Gabriel Balog'
});