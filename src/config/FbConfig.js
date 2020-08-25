import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDsvJRY34o4y2GttwZb9aoUYA48Eqv8jds",
    authDomain: "events-wall.firebaseapp.com",
    databaseURL: "https://events-wall.firebaseio.com",
    projectId: "events-wall",
    storageBucket: "events-wall.appspot.com",
    messagingSenderId: "420764841323",
    appId: "1:420764841323:web:d9e496b04520b9aa3d082e",
    measurementId: "G-DM1M3124Y7"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// no longer need this:
// firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;