import React from 'react';
import moment from 'moment';

const Notifications = (props) =>{
    const {notifications} = props;
    return (
        <div className='section'>
            <div className="card z-depth-1 grey lighten-3">
                <div className="card-content">
                    <div className="card-title">
                    <h4 className='center'>Notifications</h4>
                    </div>
                    <ul className='notification'>
                        {notifications && notifications.map(notification =>{
                            return (
                                <li key={notification.id} className='mb-1'>
                                    <div className='line-justify'>
                                    <span className='deep-orange-text'> {notification.user} </span>
                                    <span>{notification.content}</span>
                                    </div>
                                    <div className="note-date grey-text lighten-3 line-end"> {moment(notification.time.toDate()).fromNow()} </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    );
}



export default Notifications;