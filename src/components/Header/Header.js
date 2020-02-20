import React from 'react';
import logo from './logo.svg';
import styles from './header.module.css';
import AuthContainer from '../Auth/AuthContainer';

const Header = ({ state }) => {
  return(
    <header className={styles.App_header}>
      <img src={logo} className={styles.App_logo} alt="logo" />
      <h4>React Social Network</h4>
      <h6>{state.date.toLocaleTimeString()}</h6>
      <div className={styles.auth}>
        <AuthContainer />
      </div>
    </header>
  )
}

export default Header;
