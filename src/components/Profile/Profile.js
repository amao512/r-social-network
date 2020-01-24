import React, {Component} from 'react';
import styles from './profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
  render(){
    return (
      <div className={styles.profile}>

        <ProfileInfo />
        <MyPostsContainer />

      </div>
    )
  }
}

export default Profile;
