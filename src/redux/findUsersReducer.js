import { API } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'STATE_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SEARCH_USER = 'SET_SEARCH_USER';
const IS_LOADING = 'IS_LOADING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';
const api = '20dcf41f-4ce2-4a58-8dd0-73d7bf071b3c';

const initialState = {
  api: api,
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalCount: 0,
  currentTerm: '',
  isLoading: false,
  isFollowingProgressing: [],
};

const FindUsersReducer = (state = initialState, action) => {
  window.store = state;
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.id){
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.id){
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.count }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber }
    case SET_SEARCH_USER:
      return { ...state, currentTerm: action.user }
    case IS_LOADING:
      return { ...state, isLoading: action.loadValue }
    case TOGGLE_FOLLOWING:
      return { 
        ...state,
        isFollowingProgressing: action.isFetching 
          ? [...state.isFollowingProgressing, action.userId]
          : state.isFollowingProgressing.filter(id => id === action.userId)
        }
    default:
      return state;

  }
}

export const follow = id => ({ type: FOLLOW, id });
export const unfollow = id => ({ type: UNFOLLOW, id });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalCount = count => ({ type: SET_TOTAL_COUNT, count });
export const setCurrentPage = pageNumber => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setSearchUser = user => ({ type: SET_SEARCH_USER, user });
export const isLoading = (loadValue) => ({ type: IS_LOADING, loadValue });
export const toggleFollowing = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING, isFetching, userId });

export const getUsersThunk = (currentPage, pageSize, term) => async dispatch => {
  dispatch(isLoading(true));

  let data = await API.getUsers(currentPage, pageSize, term);

  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
  dispatch(isLoading(false));
}

const followUnfollowFlow = async (dispatch, userId, api, action) => {
  dispatch(toggleFollowing(true, userId));

  let data = await api(userId);

  if(data.resultCode === 0){
    dispatch(action(userId));
  }

  dispatch(toggleFollowing(false, userId));
}

export const postFollowThunk = userId => async dispatch => {
  await followUnfollowFlow(dispatch, userId, API.postFollow, follow);
}

export const deleteUnfollowThunk = userId => async dispatch => {
  await followUnfollowFlow(dispatch, userId, API.deleteUnfollow, unfollow);
}

export default FindUsersReducer;