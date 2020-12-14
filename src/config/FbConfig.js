import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// no longer need this:
// firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;
