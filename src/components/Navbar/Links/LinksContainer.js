import React from 'react';
import { connect } from 'react-redux';
import Links from './Links';
import { logoutThunk } from '../../../redux/thunks/authReducerThunk';

const LinksContainer = props => {
  return <Links {...props}/>
}

const mapStateToStore = state => ({
    navLinks: state.navbar,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToStore, { logoutThunk })(LinksContainer);
