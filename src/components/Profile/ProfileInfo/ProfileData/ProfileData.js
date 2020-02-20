import React, { useState } from 'react';
import styles from './profileData.module.css';
import { Field, reduxForm } from 'redux-form';

const ProfileData = ({ profile, saveDetails, isOwner }) => {
    const {aboutMe, lookingForAJob, lookingForAJobDescription} = profile;

    const [editMode, setEditMode] = useState(false);

    const editDetails = () => {
        setEditMode(true);
    }

    const onSaveDetails = formData => {
        saveDetails(formData);
        setEditMode(false);
    }

    return (
        <div className={styles.profileData}>
            {!editMode && 
                <div className={styles.profileData}>
                    <div className={styles.dataTitle}>
                        {aboutMe && <p>About me:</p>}
                        {lookingForAJob && <p>Looking for a job:</p>}
                        {lookingForAJobDescription && <p>Description:</p>}
                    </div>
        
                    <div className={styles.dataInfo}>
                        {aboutMe && <p>{aboutMe}</p>}
                        {lookingForAJob && <p>{lookingForAJob ? 'Yes' : 'No'}</p>}
                        {lookingForAJobDescription && <p>{lookingForAJobDescription}</p>}
                    </div>
        
                   {isOwner && <button onClick={editDetails}>Edit</button>}
                </div>
            }

            {editMode && <EditDetailsForm profile={profile} onSubmit={onSaveDetails} initialValues={profile}/>}
        </div>
    )
}

const EditDetails = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.profileData}>
            <div className={styles.dataTitle}>
                <p>About me:</p>
                <p>Looking for a job:</p>
                <p>Description:</p>
            </div>

            <div className={styles.dataInfo}>
                <p>
                    <Field component='input' name='aboutMe'/>
                </p>
                <p>
                    <Field component='input' type='checkbox' name='lookingForAJob'/>
                </p>
                <p>
                    <Field component='textarea' name='lookingForAJobDescription'/>
                </p>
            </div>

            <button>Save</button>
        </form>
    )
}

const EditDetailsForm = reduxForm({form: 'editDetails'})(EditDetails);

export default ProfileData;