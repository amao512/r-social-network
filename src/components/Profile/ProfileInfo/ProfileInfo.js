import React, { useState } from 'react';
import styles from './profileInfo.module.css';
import male_img from '../../../assets/images/user4.png';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import ProfileData from './ProfileData/ProfileData';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveDetails }) => {

  const onSavePhoto = e => {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  }

  const [showDetails, setShowDetails] = useState(false);

  const onShowDetails = () => {
    setShowDetails(true);
  }

  const onHideDetails = () => {
    setShowDetails(false);
  }

  return (
      <div>
        <div className={styles.shapka}>
          <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=''/>
        </div>

        <div className={styles.inform}>
          <div className={styles.avatar}>
           <img src={!profile.photos ? male_img : profile.photos.large} alt="avatar" />
           {isOwner && <input type='file' onChange={onSavePhoto} value="" className={styles.choosePhoto}/>}
          </div>

          <div className={styles.about}>
            <h1 className={styles.name}>{profile.fullName}</h1>
            <span className={styles.age}>18 years</span>
          </div>

          <ProfileStatusContainer status={status} updateStatus={updateStatus} />

          {!showDetails 
            ? <button onClick={onShowDetails}>Show Details</button> 
            : <button onClick={onHideDetails}>Hide Details</button>
          }

          {showDetails && <ProfileData profile={profile} saveDetails={saveDetails} isOwner={isOwner} />}

        </div>
      </div>
    )
}

export default ProfileInfo;
