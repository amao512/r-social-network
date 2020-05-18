import { SET_INITIALIZED } from '../constants';

const initialState = {
    initializing: false as boolean
}

type InitialStateType = typeof initialState

const AppReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type){
        case SET_INITIALIZED: 
            return { ...state, initializing: true }
        default:
            return state;
    }
}

export default AppReducer;