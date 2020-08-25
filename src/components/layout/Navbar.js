import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux';

const Navbar = (props)=>{
    const {auth, profile} = props;
    const links =  auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks />; 
    return (
        <nav className="nav-wrapper red darken-4">
            <div className="container">
                <Link to='/' className="brand-logo bold"><h2 className='mp'>Events-Wall</h2></Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    )
}

const mapStateToProps = state =>{
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);