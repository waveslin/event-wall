export const signIn = credentials =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch(err =>{
            dispatch({type: 'LOGIN_ERROR', err});
        });
    };
}


export const signOut = ()=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
        firebase.logout();
    }
}

export const signUp = user =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then(result =>{
            return firestore.collection('users').doc(result.user.uid).set({
                firstName: user.firstName,
                lastName: user.lastName,
                initial: user.firstName[0]+user.lastName[0]
            });
        }).then(()=> {
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch(err =>{
            dispatch({type: 'SIGNUP_ERROR', err});
        });
    }
}