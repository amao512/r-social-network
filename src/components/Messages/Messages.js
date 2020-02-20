import React from 'react';
import styles from './messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogsContainer from './Dialogs/DialogsContainer';

const Messages = ({ users }) => {
  return (
    <div className={styles.message_content}>
      <h1>Messages</h1>

      <div className={styles.messages}>
        <MessageItem users={users} />
        <DialogsContainer />
      </div>
    </div>
  )
}

export default Messages;
