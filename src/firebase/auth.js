import firebase from 'firebase/app';
import 'firebase/auth';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };
