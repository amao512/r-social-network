import React from 'react';
import styles from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profile, status, updateStatusThunk, match, savePhoto, saveDetails}) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo profile={profile} 
                   status={status} 
                   updateStatus={updateStatusThunk} 
                   isOwner={!match.params.userId}
                   savePhoto={savePhoto} 
                   saveDetails={saveDetails}
                   />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
