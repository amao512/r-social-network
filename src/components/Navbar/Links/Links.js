import React, {Component} from 'react';
import styles from './links.module.css';
import {NavLink} from 'react-router-dom';

class Links extends Component {
  render(){
    let state = this.props.state;
    
    return (
      <div className={styles.links}>
        <ul>
          {Object.keys(state).map((keyName, i) => (
              <li key={keyName}>
                <NavLink
                  to={state[i].path}
                  activeClassName={styles.active}
                  className={styles.item}>{state[i].title}</NavLink>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Links;
