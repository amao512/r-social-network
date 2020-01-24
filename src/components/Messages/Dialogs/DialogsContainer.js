import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMessageCreator, newMessageCreator} from './../../../redux/messagesReducer.js';
import Dialogs from './Dialogs';

class DialogsComponent extends Component {
  
  newMessage = e => {
    this.props.newMessageCreator(e);
  }

  sendMessage = () => {
    this.props.addMessageCreator();
  }

  render(){  
    return (
      <Dialogs 
          newMessage={this.newMessage}
          sendMessage={this.sendMessage}
          state={this.props.state}
      />
    )
  }
};



const mapStateToStore = state => {
  return {
    state: state.messages
  }
}

const DialogsContainer = connect(mapStateToStore, {addMessageCreator, newMessageCreator})(DialogsComponent);

export default DialogsContainer;
