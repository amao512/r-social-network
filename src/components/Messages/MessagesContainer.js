import { connect } from 'react-redux';
import Messages from './Messages';

const mapStateToStore = state => {
  return {
    state: state.messages.users
  }
}

const MessagesContainer = connect(mapStateToStore)(Messages)

export default MessagesContainer;
