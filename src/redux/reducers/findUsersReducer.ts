import { 
  FOLLOW, UNFOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE,
  SET_SEARCH_USER, IS_LOADING, TOGGLE_FOLLOWING
} from '../constants';
import { UsersType } from '../../types/reduxTypes';

const api = process.env.REACT_APP_API_KEY;

const initialState = {
  api: api as string,
  users: [] as Array<UsersType>,
  currentPage: 1 as number,
  pageSize: 5 as number,
  totalCount: 0 as number,
  currentTerm: '' as string,
  isLoading: false as boolean,
  isFollowingProgressing: [] as Array<any>,
};

type InitialStateType = typeof initialState

const FindUsersReducer = (state = initialState, action: any): InitialStateType => {
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

export default FindUsersReducer;