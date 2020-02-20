import male_img from '../assets/images/user4.png';
import { API, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

let initialState = {
  posts: [],
  profileInfo: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let arr = {
        id: state.posts[-1] + 1,
        likes: false,
        src: state.profileInfo.photos.small || male_img,
        fullName: state.profileInfo.fullName,
        text: action.postText,
        likesCount: 0
      };
      return {
        ...state,
        newChangePost: '',
        posts: [arr, ...state.posts],
      }
    case SET_PROFILE:
      return { ...state, profileInfo: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status }
    case SET_PHOTO:
      return { ...state, profileInfo: {...state.profileInfo, photos: action.photo}}
    default:
      return state;
  }
}

window.store = initialState;

export const onAddPost = postText => ({ type: ADD_POST, postText });
export const setProfile = profile => ({ type: SET_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });
export const setPhoto = photo => ({ type: SET_PHOTO, photo });

export const getProfileThunk = userId => async dispatch => {
  let data = await API.getProfile(userId)
  dispatch(setProfile(data))
}

export const getStatusThunk = userId => async dispatch => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}

export const updateStatusThunk = status => async dispatch => {
  let data = await profileAPI.updateStatus(status)

  if(data.resultCode === 0){
    dispatch(setStatus(status))
  }
}

export const savePhoto = photo => async (dispatch, getState) => {
  let data = await profileAPI.savePhoto(photo)

  if(data.resultCode === 0){
    // dispatch(setPhoto(data.data.photos))
    dispatch(getProfileThunk(getState().auth.userId))
  }
}

export const saveDetails = formData => async (dispatch, getState) => {
  let data = await profileAPI.saveDetails(formData);
  let userId = getState().auth.userId;
  
  if(data.resultCode === 0){
    dispatch(getProfileThunk(userId));
  }
}

export default profileReducer;
