import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
 
const FriendsContainer = props => {
    return <Friends {...props} />
}

const mapStateToStore = state => ({
  users: state.friends.users
})

export default compose(connect(mapStateToStore), withAuthRedirect)(FriendsContainer);