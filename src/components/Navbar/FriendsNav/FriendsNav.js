import React, {Component} from 'react';
import styles from './friendsNav.module.css';

class FriendsNav extends Component {
  render(){
    let state = this.props.state;
    
    return (
      <div className={styles.navFriends}>

        {state.map(item => (
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
}

export default FriendsNav;
