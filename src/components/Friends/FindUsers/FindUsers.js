import React from 'react';
import styles from './findUsers.module.css';
import SearchUserForm from './SearchUserForm/SearchUserForm';
import UsersList from './UsersList/UsersList';
import Paginator from './Paginator/Paginator';
import { NavLink } from 'react-router-dom';

const FindUsers = ({searchUser, isLoading, ...props}) => {
  return (
    <div className={styles.find_user}>
        <div className={styles.header}>
          <NavLink to='/friends' className={styles.pastLink}>Exit</NavLink>
          <SearchUserForm onSubmit={searchUser}/>
        </div>
        
        <UsersList {...props} />
        <Paginator {...props}/>
    </div>
  )
}

export default FindUsers;
