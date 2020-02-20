import React from 'react';
import styles from './navbar.module.css';
import LinksContainer from './Links/LinksContainer';
import FriendsNavContainer from './FriendsNav/FriendsNavContainer';

const Navbar = () => {
  return(
    <div className={styles.navbar}>
      <LinksContainer />
      <FriendsNavContainer />
    </div>
  )
}

export default Navbar;
