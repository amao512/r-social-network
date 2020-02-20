import { getAuthThunk } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initializing: false
}

const AppReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZED: 
            return { ...state, initializing: true }
        default:
            return state;
    }
}

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializingThunk = () => (dispatch) => {
    let promise = dispatch(getAuthThunk());

    Promise.all([promise]).then(() => dispatch(setInitialized()))
}

export default AppReducer;