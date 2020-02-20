import React from 'react';
import { connect } from 'react-redux';
import { addMessageCreator } from './../../../redux/messagesReducer.js';
import Dialogs from './Dialogs';

const DialogsComponent = ({addMessageCreator, dialogs}) => {
  const sendMessage = formData => {
    addMessageCreator(formData.messageField);
    formData.messageField = '';
  }

  return <Dialogs sendMessage={sendMessage} dialogs={dialogs} />
};



const mapStateToStore = state => ({
    dialogs: state.messages.dialogs
});

const DialogsContainer = connect(mapStateToStore, { addMessageCreator })(DialogsComponent);

export default DialogsContainer;
