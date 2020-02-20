import React from 'react';
import styles from './login.module.css';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator/validator';
import { Input } from '../common/FormControl/FormControl';
import { connect } from 'react-redux';
import { loginThunk } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.input_form}>
                <Field component={Input} 
                       placeholder={'Login'} 
                       name={'email'} 
                       className={styles.form_field} 
                       validate={[required]} />
            </div>
            <div className={styles.input_form}>
                <Field component={Input} 
                       placeholder={'Password'} 
                       name={'password'} 
                       type={'password'} 
                       className={styles.form_field}
                       validate={[required]} />
            </div>
            <div className={styles.input_form}>
                <Field component={'input'} 
                       name={'rememberMe'} 
                       type={'checkbox'}        
                />
                <label>remember me</label>
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field component={'input'} name={'captcha'} className={styles.form_field} />}

            <div className={styles.input_form}>
                <button>Login</button>
            </div>
            {error && <div className={styles.invalidError}>{error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = ({email, password, rememberMe, captcha}) => {
        props.loginThunk(email, password, rememberMe, captcha)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={styles.login_form}>
            <h1>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { loginThunk })(Login);