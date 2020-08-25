import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ActivitySummary = ({activity})=>{
    return (
        <Link to={{pathname: "/activity/"+activity.id, state: activity }} className="black-text">
            <div className="card z-depth-0 activity-summary container">
                <div className="card-content">
                    <blockquote className="mp-0 bs-0 hover-grey">
                        <span className="card-title">{activity.title}</span>
                        <p>Post by {activity.author_F} {activity.author_L}</p>
                        <p className="grey-text">{moment(activity.date.toDate()).calendar()}</p>
                    </blockquote>
                </div>
            </div>
        </Link>
    );
}

export default ActivitySummary;