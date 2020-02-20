import React from 'react';
import styles from './searchUserForm.module.css';
import { Field, reduxForm } from "redux-form"

const SearchUserForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.search_user}>
            <Field component='input' name='searchField' />
            <button>Search</button>
        </form>
    )
}

export default reduxForm({ form: 'searchUser' })(SearchUserForm);