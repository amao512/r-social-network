import React from 'react';
import styles from './links.module.css';
import {NavLink} from 'react-router-dom';

const Links = ({navLinks, isAuth, logoutThunk}) => {
  return (
    <div className={styles.links}>
      <ul>
        {navLinks.map(link => (
          <li key={link.id}>
            <NavLink to={link.path}
                     activeClassName={styles.active}
                     className={styles.item}>{link.title}</NavLink>
          </li>
        ))}

        {isAuth && <li onClick={logoutThunk} className={styles.signOut}>Sign out</li>}
      </ul>
    </div>
  )
}

export default Links;
