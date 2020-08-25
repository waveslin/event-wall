const initState ={
    activities:  []
}

const activityReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'CREATE_ACTIVITY':
            console.log('CREATE ACTIVITY', action.activity);   
            return state;
        case 'CREATE_ACTIVITY_ERROR':
            console.log('CREATE ACTIVITY ERROR', action.err);   
            return state;
        default:
            return state;
    }
    
}

export default activityReducer;