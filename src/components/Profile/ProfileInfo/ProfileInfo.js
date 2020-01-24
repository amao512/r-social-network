import React, {Component} from 'react';
import styles from './profileInfo.module.css';

class ProfileInfo extends Component {
  render(){
    return (
      <div>
        <div className={styles.shapka}>
          <img src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=''/>
        </div>

        <div className={styles.inform}>
          <div className={styles.avatar}>
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=''/>
          </div>

          <div className={styles.about}>
            <h1 className={styles.name}>Asylzhan Seytbek</h1>
            <span className={styles.age}>18 years</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;
