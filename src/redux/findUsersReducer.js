const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'STATE_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_NEW_TERM_TEXT = 'SET_NEW_TERM_TEXT';
const SET_SEARCH_USER = 'SET_SEARCH_USER';
const IS_LOADING = 'IS_LOADING';
const api = '20dcf41f-4ce2-4a58-8dd0-73d7bf071b3c';

const initialState = {
  api: api,
  users: [],
  currentPage: 1,
  pageSize: 4,
  totalCount: 0,
  currentTerm: '',
  newCurrentTerm: '',
  isLoading: false
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
    case SET_NEW_TERM_TEXT:
      return { ...state, newCurrentTerm: action.termText }
    case SET_SEARCH_USER:
      return { 
        ...state, 
        currentTerm: state.newCurrentTerm,
        newCurrentTerm: ''
      }
    case IS_LOADING:
      return { ...state, isLoading: action.loadValue }
    default:
      return state;

  }
}

export const follow = id => ( {type: FOLLOW, id} );
export const unfollow = id => ( {type: UNFOLLOW, id} );
export const setUsers = users => ( {type: SET_USERS, users} );
export const setTotalCount = count => ( {type: SET_TOTAL_COUNT, count} );
export const setCurrentPage = pageNumber => ( {type: SET_CURRENT_PAGE, pageNumber} );
export const setTermText = termText => ( {type: SET_NEW_TERM_TEXT, termText} );
export const setSearchUser = () => ( {type: SET_SEARCH_USER} );
export const isLoading = (loadValue) => ( {type: IS_LOADING, loadValue } )

export default FindUsersReducer;