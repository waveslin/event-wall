const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//Here is one sample of the firebase cloud function
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Waves!");
});


const createdNotification = (notification =>{
    return admin.firestore().collection('notifications').add(notification).then(doc => console.log('new notification: ',doc));
});

exports.ActivityCreated = functions.firestore
    .document('Activity/{activity}')
    .onCreate(doc =>{
        const activity = doc.data();
        const notification = {
            content: 'Posted a new activity',
            user: `${activity.author_F} ${activity.author_L}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createdNotification(notification);
});


exports.userEntered = functions.auth.user().onCreate(user =>{
    return admin.firestore().collection('users').doc(user.uid).get().then(doc =>{
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createdNotification(notification);
    });
});