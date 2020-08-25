import React from 'react';
import ActivitySummary from './ActivitySummary';


const ActivityList = ({activities})=>{

    const activity = activities && activities.map(activity =>{
        return  (<ActivitySummary activity={activity} key={activity.id}/>);
    });

    return (
        <div className="activity-list section">
            {activity}
        </div>
    );
}

export default ActivityList;