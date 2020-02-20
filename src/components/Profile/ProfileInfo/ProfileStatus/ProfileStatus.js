import React from 'react';
import styles from './profileStatus.module.css';

const ProfileStatus = ({editMode, activateStatus, status, diactivateStatus, changeStatus, valueStatus}) => {
    return (
        <div className={styles.profile_status}>
            {!editMode && 
                <div>
                    <span onClick={activateStatus}>{status || 'No Status'}</span>
                </div>
            }
            
            {editMode && 
                <div onBlur={diactivateStatus}>
                    <input onChange={changeStatus} type='text' value={valueStatus}/>
                    <button onClick={diactivateStatus}>Save</button>
                </div>
            }
            
        </div>
    )
}

export default ProfileStatus;