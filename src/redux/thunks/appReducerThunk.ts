import { setInitialized } from './../actions';
import { getAuthThunk } from '../thunks/authReducerThunk';

export const initializingThunk = () => (dispatch: any) => {
    let promise = dispatch(getAuthThunk());
    Promise.all([promise]).then(() => dispatch(setInitialized()))
}
