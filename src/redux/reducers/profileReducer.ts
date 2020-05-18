import male_img from '../../assets/images/user4.png';
import { ADD_POST, SET_PROFILE, SET_STATUS, SET_PHOTO } from '../constants';
import { PostsType, ProfileType } from '../../types/reduxTypes';

let initialState = {
  posts: [] as Array<PostsType>,
  profileInfo: {} as ProfileType,
  status: '' as string,
  newChangePost: '' as string,
}

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let arr: PostsType = {
        id: Math.random(),
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

export default profileReducer;
