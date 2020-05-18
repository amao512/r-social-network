import React, { Component } from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { getAuthThunk } from '../../redux/thunks/authReducerThunk';

class AuthContainer extends Component {
    componentDidMount(){
        this.props.getAuthThunk()
    }
    
    render(){
        return <Auth {...this.props}/>
    }
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthThunk })(AuthContainer);