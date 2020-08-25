import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authAction.';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
        email:'',
        password: ''
    }

    signInSubmit = e =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }

    signInChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const {authError, auth} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form action="" className="blue-grey lighten-5 form" onSubmit={this.signInSubmit}>
                    <h4 className="grey-text text-darken-2 center">Sign In</h4>
                    <div className="container">
                        <div className="input-field center">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.signInChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.signInChange}/>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="btn-large deep-orange accent-3 right z-depth-0 waves-effect waves-light sumbit" value="Login"/>
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

const mapDispatchToProps = dispatch =>{
    return {
        signIn: credatials => dispatch(signIn(credatials))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
