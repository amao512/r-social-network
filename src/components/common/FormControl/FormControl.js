import React from 'react';
import styles from './formControl.module.css';

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? styles.errorControl : ''}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}