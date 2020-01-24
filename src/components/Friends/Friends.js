import React, {Component} from 'react';
import styles from './friends.module.css';
import {NavLink} from 'react-router-dom';

class Friends extends Component {
  render(){
    let state = this.props.state;

    return (
      <div>

        <div className={styles.log_find}>
          <h1>Friends</h1>
          <NavLink to="/find-users" className={styles.find_users}>Find Users</NavLink>
        </div>

        <div className={styles.friends}>

          {state.map(item => (
              <div key={item.id} className={styles.friendItem}>
                <a href={item.link}>
                  <img src={item.img} className={styles.img} alt='avatar'/>
                </a>
                <a href={item.link} className={styles.name}>{item.firstName} {item.lastName}</a>
              </div>
          ))}

        </div>
      </div>
    )
  }
}

export default Friends;
