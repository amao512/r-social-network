import React from 'react';
import { connect } from 'react-redux';
import FriendsNav from './FriendsNav';

const FriendsNavContainer = ({ friends }) => {
  return <FriendsNav friends={friends} />
}

const mapStateToStore = state => ({
    friends: state.friends.users
})

export default connect(mapStateToStore)(FriendsNavContainer);
