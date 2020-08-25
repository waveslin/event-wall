import React, { Profiler } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authAction.';

const SignInLinks = (props)=>{
    return (
       <ul className="right">
           <li><NavLink to='/create'>New Event</NavLink></li>
           <li><a onClick={props.signOut}>Log Out</a></li>
           <li><NavLink to='/' className="btn btn-floating  red accent-4">{props.profile.initial}</NavLink></li>
       </ul>
    )
}

const mapDispathToProps = dispatch =>{
    return {
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(null, mapDispathToProps)(SignInLinks);