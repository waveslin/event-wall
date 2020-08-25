import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ActivityDetails = (props) => {
    const {activity, id, auth} = props;
    if (!auth.uid) return <Redirect to='/signin' />
    

    if(activity)
    return (
        <div className="activity-detais container section">
            <div className="card z-depth-0">
                <div className="card-content ">
                    <span className="card-title">{activity.title} - {id}</span>
                    <p>{activity.content}</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>
                    <div>Post by {activity.author_F} {activity.author_L}</div>
                    <div className="grey-text">{moment(activity.date.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
    else
    return(
        <div className="container">
            <h3 className="white-text center">LOADING . . .</h3>
        </div>
    );
}

const mapStateToProps = (state, ownProps) =>{
    const id = ownProps.match.params.id;
    const activities = state.firestore.data.Activity;
    const activity = activities ? activities[id] : null
    return {
       activity: activity,
       id : id,
       auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps, firestoreConnect(['Activity'])))(ActivityDetails);