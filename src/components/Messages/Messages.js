import React, {Component} from 'react';
import styles from './messages.module.css';

import MessageItem from './MessageItem/MessageItem';
import DialogsContainer from './Dialogs/DialogsContainer';

class Messages extends Component {
  render(){
    let state = this.props.state;
    return (
      <div className={styles.message_content}>
        <h1>Messages</h1>

        <div className={styles.messages}>
          <div className={styles.users}>
            {Object.keys(state).map((keyName, i) => (
              <MessageItem key={keyName}
                           name={state[i].name}
                           id={state[i].id}/>
            ))}
          </div>

          <DialogsContainer />
        </div>

      </div>
    )
  }
}

export default Messages;
