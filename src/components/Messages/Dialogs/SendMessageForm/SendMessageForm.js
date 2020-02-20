import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SendMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field component='input' name='messageField'/>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({ form: 'sendMessage' })(SendMessageForm);