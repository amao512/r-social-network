import React from 'react';
import styles from './friendsNav.module.css';

const FriendsNav = ({ friends }) => {
  return (
    <div className={styles.navFriends}>

      {friends.map(item => (
        <div key={item.id} className={styles.friendItem}>
          <a href={item.link}>
            <img src={item.img} alt="avatar"/>
          </a>
          
          <a href={item.link}>{item.firstName}</a>
        </div>
      ))}

    </div>
  )
}

export default FriendsNav;
