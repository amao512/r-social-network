import React from 'react';
import Reload from '../../../assets/source.gif';
import styles from './reloader.module.css';

const Reloader = () => {
    return (
        <div className={styles.reloader}>
            <img src={Reload} alt='reloader'/>
        </div>
    )
}

export default Reloader;