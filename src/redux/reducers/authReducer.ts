import { SET_AUTH_DATA, LOGOUT_AUTH, GET_CAPTCHA_URL } from '../constants';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState

const AuthReducer = (state = initialState, action: any): InitialStateType => {
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

export default AuthReducer;

