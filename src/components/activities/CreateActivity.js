import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createActivity} from '../../store/actions/ActivityActions';
import {Redirect} from 'react-router-dom';

class CreateActivity extends Component {
    state = {
        title:'',
        content: ''
    }

    mySubmit = e =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createActivity(this.state);
        this.props.history.push('/');
    }

    myChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {

        const {auth} = this.props;
        if (auth.isLoaded && !auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                <form action="" className="blue-grey lighten-5 form" onSubmit={this.mySubmit}>
                    <h4 className="grey-text text-darken-2 center">New Activity</h4>
                    <div className="container">
                        <div className="input-field center">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.myChange}/>
                        </div>
                        <div className="input-field center">
                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content" className="materialize-textarea" onChange={this.myChange}></textarea>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="btn-large deep-orange accent-3 right z-depth-0 waves-effect waves-light sumbit" value="post"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.firebase.auth
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        createActivity: activity => dispatch(createActivity(activity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateActivity);
