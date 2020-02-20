import React from 'react';
import styles from './dialogs.module.css';
import SendMessageForm from './SendMessageForm/SendMessageForm';

const Dialogs = ({sendMessage, dialogs}) => {
  return (
    <div>
      <div className={styles.dialogs}>
        {dialogs.map(item => (
          <p key={item.id}>{item.message}</p>
        ))}
      </div>

      <div className={styles.sendMsg}>
        <SendMessageForm onSubmit={sendMessage} />
      </div>
    </div>
  )
};

export default Dialogs;
