import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './config/FbConfig';
import firebase from 'firebase/app';
import {createFirestoreInstance} from 'redux-firestore';



const store = createStore(rootReducer, compose( 
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig)
    )
);


// This is important to fix issue dispatch={_internalFirebase.dispatch} is null
// Guess it need to initial the config manually 
//passing firebase(firebase/app), fbConfig, createFirestoreInstance, and set the dispath to store.dispath
// Then using a ReactReduxFirebaseProvider(Provider) import from 'react-redux-firebase' 
//<ReactReduxFirebaseProvider {...config}></ReactReduxFirebaseProvider>
if (!firebase.apps.length)
    firebase.initializeApp(fbConfig);

const info = {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
}

const config = {
    firebase,
    config: info,
    dispatch: store.dispatch,
    createFirestoreInstance 
  }
  

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...config}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
