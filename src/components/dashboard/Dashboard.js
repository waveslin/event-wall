import React, {Component} from 'react';
import Notifications from './Notificaations';
import ActivityList from '../activities/ActivityList';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{
    
    render(){
        const {activities, auth, notifications} = this.props;
        if (auth.isLoaded && !auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ActivityList activities={activities}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state =>{
    if(state.firestore.ordered.Activity)
        return {
            activities: state.firestore.ordered.Activity,
            auth : state.firebase.auth,
            notifications: state.firestore.ordered.notifications
        };
    else
        return {
            activities:  state.activity.activities,
            auth : state.firebase.auth
        };
}

export default compose(
    firestoreConnect([{collection: 'Activity', orderBy: ['date', 'desc']}, {collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}]),
    connect(mapStateToProps)
    )(Dashboard);



