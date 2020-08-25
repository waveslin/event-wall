import {combineReducers} from 'redux';
import authReducer from './authReducer';
import activityReducer from './activityReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    activity: activityReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;