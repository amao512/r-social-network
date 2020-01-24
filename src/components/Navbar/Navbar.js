import React, {Component} from 'react';
import styles from './navbar.module.css';

import LinksContainer from './Links/LinksContainer';
import FriendsNavContainer from './FriendsNav/FriendsNavContainer';

class Navbar extends Component {
  render(){
    return(
      <div className={styles.navbar}>
        <LinksContainer />
        <FriendsNavContainer />
      </div>
    )
  }
}

export default Navbar;
