export const createActivity = (activity)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId =  getState().firebase.auth.uid;
        firestore.collection('Activity').add({
            ...activity,
            author_F : profile.firstName,
            author_L: profile.lastName,
            authorId: userId,
            date: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_ACTIVITY', activity: activity});
        }).catch((err)=>{
            dispatch({type: 'CREATE_ACTIVITY_ERROR', err: err});
        });
        
    };
};
