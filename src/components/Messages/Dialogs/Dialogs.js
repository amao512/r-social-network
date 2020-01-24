import React from 'react';
import styles from './dialogs.module.css';

const Dialogs = ({ newMessage, sendMessage, state }) => {

  const newMessageText = (e) => {
    newMessage(e.target.value)
  }

  return (
    <div>
      <div className={styles.dialogs}>
        {Object.keys(state.dialogs).map((keyName, i) => (
          <p key={keyName}>{state.dialogs[i].message}</p>
        ))}
      </div>

      <div className={styles.sendMsg}>
        <input onChange={newMessageText} value={state.newDialogs} type='text'/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
};

export default Dialogs;
