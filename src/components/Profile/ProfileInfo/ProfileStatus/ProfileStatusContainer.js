import React, { useState, useEffect } from 'react';
import ProfileStatus from './ProfileStatus';

const ProfileStatusContainer = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateStatus = () => {
        setEditMode(true)
    }

    const diactivateStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const changeStatus = e => {
        setStatus(e.currentTarget.value)
    }
    
    // Замена ComponentDidUpdate
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) // !!!Означает что этот хуки зависимо от этого props.status
                       // и оно будет отрисововать весь компонент когда изменить значени props.status!!!

    return <ProfileStatus editMode={editMode} 
                          activateStatus={activateStatus}
                          valueStatus={status}
                          changeStatus={changeStatus}
                          diactivateStatus={diactivateStatus}
                          status={props.status}
            />
}

export default ProfileStatusContainer;