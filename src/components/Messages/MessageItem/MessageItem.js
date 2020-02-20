import React from 'react';
import styles from './messageItem.module.css';
import {NavLink} from 'react-router-dom';

const MessageItem = ({ users }) => {
  return (
    <div className={styles.users}>
      {users.map(item => (
        <h3 key={item.id}>
          <NavLink to={`/messages/${item.id}`}>{item.name}</NavLink>
        </h3>
       ) 
      )}
    </div>
  )
}

export default MessageItem;
