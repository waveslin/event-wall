import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authAction.'

class SignUp extends Component {
    state = {
        email:'',
        password: '',
        firstName: '',
        lastName: ''
    }

    signUpSubmit = e =>{
        e.preventDefault();
        this.props.signUp(this.state)
    }

    signUpChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form action="" className="blue-grey lighten-5 form" onSubmit={this.signUpSubmit}>
                    <h4 className="grey-text text-darken-2 center">Sign Up</h4>
                    <div className="container">
                        <div className="input-field center">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.signUpChange}/>
                        </div>
                        <div className="input-field center">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.signUpChange}/>
                        </div>
                        <div className="input-field center">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.signUpChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.signUpChange}/>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="btn-large deep-orange accent-3 right z-depth-0 waves-effect waves-light sumbit" value="Sign up"/>
                            <div className="red-text right">
                                {authError ? <p>{authError}</p> : <p> </p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = dispatch=>{
    return {
        signUp: user =>dispatch(signUp(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
