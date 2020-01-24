import React, {Component} from 'react';
import logo from './logo.svg';
import styles from './header.module.css'

class Header extends Component {
  render(){
    return(
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <h3>React Social Network</h3>
      </header>
    )
  }
}

export default Header;
