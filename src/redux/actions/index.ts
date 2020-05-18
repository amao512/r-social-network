import { 
    SET_INITIALIZED, SET_AUTH_DATA, LOGOUT_AUTH, GET_CAPTCHA_URL, FOLLOW, UNFOLLOW, 
    SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, SET_SEARCH_USER, IS_LOADING, 
    TOGGLE_FOLLOWING, SET_FRIENDS, ADD_MESSAGE, ADD_POST, SET_PROFILE, SET_STATUS, 
    SET_PHOTO
} from '../constants';
import { 
    SetInitializedType, SetAuthDataType, LogoutAuthType, GetCaptchaType, FollowType,
    UnfollowType, UsersType, SetUsersType, SetTotalCount, SetCurrentPageType, SetSearchUserType,
    IsLoadingType, ToggleFollowingType, SetFriends, FriendsUsersType, AddMessageCreatorType,
    OnAddPostType, PostsType, SetProfileType, SetStatusType, SetPhotoType
} from '../../types/reduxTypes';

/* appReducer actions */
export const setInitialized = (): SetInitializedType => ({ type: SET_INITIALIZED });

/* authReducer actions */
export const setAuthData = (userId: number | null, login: string | null, email: string | null): SetAuthDataType => ({ 
    type: SET_AUTH_DATA, data: {userId, login, email} 
});
export const logoutAuth = (isAuth: boolean): LogoutAuthType => ({ type: LOGOUT_AUTH, isAuth });
export const getCaptcha = (captchaUrl: string): GetCaptchaType => ({ type: GET_CAPTCHA_URL, captchaUrl });

/* findUsersReducer actions */
export const follow = (id: number): FollowType => ({ type: FOLLOW, id });
export const unfollow = (id: number): UnfollowType => ({ type: UNFOLLOW, id });
export const setUsers = (users: Array<UsersType>): SetUsersType => ({ type: SET_USERS, users });
export const setTotalCount = (count: number): SetTotalCount => ({ type: SET_TOTAL_COUNT, count });
export const setCurrentPage = (pageNumber: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setSearchUser = (user: string): SetSearchUserType => ({ type: SET_SEARCH_USER, user });
export const isLoading = (loadValue: boolean): IsLoadingType => ({ type: IS_LOADING, loadValue });
export const toggleFollowing = (isFetching: boolean, userId: number): ToggleFollowingType => ({ type: TOGGLE_FOLLOWING, isFetching, userId });

/* friendsReducer actions */
export const setFriends = (friend: Array<FriendsUsersType>): SetFriends => ({ type: SET_FRIENDS, friend });

/* messagesReducer actions */
export const addMessageCreator = (msgText: string): AddMessageCreatorType => ({ type: ADD_MESSAGE, msgText });

/* profileReducer actions */
export const onAddPost = (postText: string): OnAddPostType => ({ type: ADD_POST, postText });
export const setProfile = (profile: PostsType): SetProfileType => ({ type: SET_PROFILE, profile });
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });
export const setPhoto = (photo: string): SetPhotoType => ({ type: SET_PHOTO, photo });