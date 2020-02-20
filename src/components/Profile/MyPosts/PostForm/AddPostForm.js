import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field component={'input'} name={'postField'} placeholder={'Your post might be here...'} />
      <button>Add</button>
    </form>
  )
}

export default reduxForm({ form: 'newPost' })(AddPostForm);
