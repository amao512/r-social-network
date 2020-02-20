import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const MessagesContainer = ({ users }) => {
    return <Messages users={users} />
}

const mapStateToStore = state => ({
    users: state.messages.users
});

export default compose(connect(mapStateToStore), withAuthRedirect)(MessagesContainer);