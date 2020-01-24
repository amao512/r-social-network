import React from 'react';
import styles from './findUsers.module.css';
import male_img from '../../../assets/images/matthew.png'
import Reloader from '../../common/reloader/Reloader';

const FindUsers = ({ users, totalUsersCount, pageSize, changeTermText, newTermText, searchUser, follow, unfollow, currentPage, changePage, isLoading }) => {
  
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i)
  }

  return (
    <div className={styles.find_user}>

        <div className={styles.search_user}>
          <input type='text' onChange={changeTermText} value={newTermText}/>
          <button type='submit' onClick={searchUser}>Search</button>
        </div>

        {isLoading === true ? <Reloader /> : null}

        {users.map(item => (
          <div key={item.id} className={styles.user}>
            <img src={item.photos.small != null ? item.photos.small : male_img} alt='avatar'/>

            <p className={styles.user_name}>{item.name}</p>

            <div className={styles.follow_unfollow}>
              {item.followed
                ? <button className={styles.unfollow} onClick={() => unfollow(item.id)}>unfollow</button>
                : <button className={styles.follow} onClick={() => follow(item.id)}>+ follow</button>
              }
            </div>
          </div>
        ))}

        <div className={styles.paginator}>
          {pages.map(p => (
            <span key={p} className={currentPage === p ? styles.currentPage : ''} onClick={() => changePage(p)}>{p}</span>
          ))}
        </div>

    </div>
  )
}

export default FindUsers;
