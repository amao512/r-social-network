import { stopSubmit } from 'redux-form';
import { setAuthData, logoutAuth, getCaptcha } from './../actions';
import { authAPI } from "../../api/api";

export const getAuthThunk = () => async (dispatch: any) => {
    let data = await authAPI.getAuth();
   
    if(data.resultCode === 0){
        let {id, login, email} = data.data;
        dispatch(setAuthData(id, login, email));
    }

    if(data.resultCode === 10){
        dispatch(getCaptchaThunk());
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
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
}

export const logoutThunk = () => async (dispatch: any) => {
    let data = await authAPI.logout();

    if(data.resultCode === 0){
        dispatch(setAuthData(null, null, null));
        dispatch(logoutAuth(false));
    }
}

export const getCaptchaThunk = () => async (dispatch: any) => {
    let data = await authAPI.getCaptcha();
    let captchaUrl = data.url;
    console.log(captchaUrl);

    dispatch(getCaptcha(captchaUrl));
}