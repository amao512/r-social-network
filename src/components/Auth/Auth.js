import React from 'react';
import styles from './auth.module.css';
import { NavLink } from 'react-router-dom';

const Auth = ({isAuth, login, profile}) => {
    return (
        <div className={styles.auth_header}>
            {isAuth 
                ? <NavLink to='/profile' className={styles.login}>
                    <h6>{login}</h6>
                  </NavLink> 
                : <NavLink to='/login' className={styles.login}>
                    <h6>Sign in</h6>
                  </NavLink>
            }
        </div>
    )
}

export default Auth;