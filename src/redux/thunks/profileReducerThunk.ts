import { setProfile, setStatus } from './../actions';
import { API, profileAPI } from '../../api/api';
import { ProfileType } from '../../types/reduxTypes';

export const getProfileThunk = (userId: number) => async (dispatch: any) => {
    let data = await API.getProfile(userId)
    dispatch(setProfile(data))
    
  }
  
  export const getStatusThunk = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
  }
  
  export const updateStatusThunk = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status)
  
    if(data.resultCode === 0){
      dispatch(setStatus(status))
    }
  }
  
  export const savePhoto = (photo: string) => async (dispatch: any, getState: any) => {
    let data = await profileAPI.savePhoto(photo)
  
    if(data.resultCode === 0){
      // dispatch(setPhoto(data.data.photos))
      dispatch(getProfileThunk(getState().auth.userId))
    }
  }
  
  export const saveDetails = (formData: ProfileType) => async (dispatch: any, getState: any) => {
    let data = await profileAPI.saveDetails(formData);
    let userId = getState().auth.userId;
    
    if(data.resultCode === 0){
      dispatch(getProfileThunk(userId));
    }
  }