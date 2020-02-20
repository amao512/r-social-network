import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = 'react-social-network/auth/SET_AUTH_DATA';
const LOGOUT_AUTH = 'react-social-network/auth/LOGOUT_AUTH';
const GET_CAPTCHA_URL = 'react-social-network/auth/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_DATA:
            return { ...state, ...action.data, isAuth: true }
        case LOGOUT_AUTH:
            return { ...state, ...action.data, isAuth: false}
        case GET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl }
        default:
            return state
    }
}

export const setAuthData = (userId, login, email) => ({ type: SET_AUTH_DATA, data: {userId, login, email} });
export const logoutAuth = isAuth => ({ type: LOGOUT_AUTH, isAuth });
export const getCaptcha = captchaUrl => ({ type: GET_CAPTCHA_URL, captchaUrl });

export const getAuthThunk = () => async dispatch => {
    let data = await authAPI.getAuth();

    if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthData(id, login, email));
    }

    if(data.resultCode === 10){
        dispatch(getCaptchaThunk());
    }
}

export const loginThunk = (email, password, rememberMe, captcha) => async dispatch => {
    let data = await authAPI.login(email, password, rememberMe, captcha);

    if(data.resultCode === 0){
        dispatch(getAuthThunk());
    } else {
        if(data.resultCode === 10){
            dispatch(getCaptchaThunk());
        }

        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }));
    }
}

export const logoutThunk = () => async dispatch => {
    let data = await authAPI.logout();

    if(data.resultCode === 0){
        dispatch(setAuthData(null, null, null));
        dispatch(logoutAuth(false));
    }
}

export const getCaptchaThunk = () => async dispatch => {
    let data = await authAPI.getCaptcha();
    let captchaUrl = data.url;
    console.log(captchaUrl);

    dispatch(getCaptcha(captchaUrl));
}

export default AuthReducer;

