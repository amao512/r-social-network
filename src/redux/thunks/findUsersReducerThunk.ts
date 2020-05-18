import { 
  isLoading, setUsers, setTotalCount, 
  toggleFollowing, follow, unfollow 
} from './../actions';
import { API } from '../../api/api';

export const getUsersThunk = (currentPage: number, pageSize: number, term: string) => {
    return async (dispatch: any) => {
      dispatch(isLoading(true));

      let data = await API.getUsers(currentPage, pageSize, term);
      
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(isLoading(false));
    }
  }
  
  const followUnfollowFlow = async (dispatch: any, userId: number, api: any, action: any) => {
    dispatch(toggleFollowing(true, userId));
  
    let data = await api(userId);
  
    if(data.resultCode === 0){
      dispatch(action(userId));
    }
  
    dispatch(toggleFollowing(false, userId));
  }
  
  export const postFollowThunk = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, API.postFollow, follow);
  }

  export const deleteUnfollowThunk = (userId: number) => async (dispatch: any) => {
    await followUnfollowFlow(dispatch, userId, API.deleteUnfollow, unfollow);
  }