import React from 'react';
import styles from './usersList.module.css';
import {NavLink} from 'react-router-dom';
import male_img from '../../../../assets/images/user4.png'

const UsersList = ({users, isFollowingProgressing, deleteUnfollowThunk, postFollowThunk}) => {
    return (
        <div className={styles.usersListComponent}>
            {users.map(item => (
            <div key={item.id} className={styles.user}>
                <NavLink to={'/profile/' + item.id} className={styles.avatar}>
                    <img src={item.photos.small !== null ? item.photos.small : male_img} alt='avatar'/>
                </NavLink>

                <p className={styles.user_name}>{item.name}</p>

                <div className={styles.follow_unfollow}>
                    {item.followed
                        ? <button disabled={isFollowingProgressing.some(id => id === item.id)} className={styles.unfollow} onClick={() => {
                            deleteUnfollowThunk(item.id)
                        }}>unfollow</button>

                        : <button disabled={isFollowingProgressing.some(id => id === item.id)} className={styles.follow} onClick={() => {
                            postFollowThunk(item.id)
                        }}>+ follow</button>
                    }
                </div>
            </div>
            ))}
        </div>
    )
}

export default UsersList;