import { 
    SET_INITIALIZED, SET_AUTH_DATA, LOGOUT_AUTH, GET_CAPTCHA_URL, FOLLOW,
    UNFOLLOW, SET_USERS, SET_TOTAL_COUNT, SET_CURRENT_PAGE, SET_SEARCH_USER,
    IS_LOADING, TOGGLE_FOLLOWING, SET_FRIENDS, ADD_MESSAGE, ADD_POST, SET_PROFILE,
    SET_PHOTO, SET_STATUS
} from '../redux/constants';

/* appReducer types */
export type SetInitializedType = { type: typeof SET_INITIALIZED }

/* authReducer types */
export type SetAuthDataType = {
    type: typeof SET_AUTH_DATA
    data: { 
        userId: number | null
        login: string | null
        email: string | null
    }
}
export type LogoutAuthType = { type: typeof LOGOUT_AUTH, isAuth: boolean }
export type GetCaptchaType = { type: typeof GET_CAPTCHA_URL, captchaUrl: string | null }

/* findUsersReducer types */
export type UsersType = {
    id: number
    name: string
    status: string
    photos: {
      small: string
      large: string
    }
    followed: boolean
}
export type FollowType = { type: typeof FOLLOW, id: number }
export type UnfollowType = { type: typeof UNFOLLOW, id: number }
export type SetUsersType = { type: typeof SET_USERS, users: Array<UsersType> }
export type SetTotalCount = { type: typeof SET_TOTAL_COUNT, count: number }
export type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, pageNumber: number }
export type SetSearchUserType = { type: typeof SET_SEARCH_USER, user: string }
export type IsLoadingType = { type: typeof IS_LOADING, loadValue: boolean }
export type ToggleFollowingType = { type: typeof TOGGLE_FOLLOWING, isFetching: boolean, userId: number }


/* friendsReducer types */
export type FriendsUsersType = {
    id: number
    link: string
    firstName: string
    lastName: string
    img: string
}
export type SetFriends = { type: typeof SET_FRIENDS, friend: Array<FriendsUsersType> }

/* messagesReducer types */
export type MessageUsersType = { id: number, name: string }
export type MessageDialogsType = { id: number, message: string }
export type AddMessageCreatorType = { type: typeof ADD_MESSAGE, msgText: string }

/* navbarReducer types */
export type NavbarType = { id: number, path: string, title: string }

/* profileReducer types */
export type PostsType = {
    id: number
    likes: boolean
    src: string
    fullName: string
    text: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
      github: string
      vk: string
      facebook: string
      instagram: string
      twitter: string
      website: string
      youtube: string
      mainLink: string
    }
    photos: {
      small: string
      large: string
    }
}

export type OnAddPostType = { type: typeof ADD_POST, postText: string }
export type SetProfileType = { type: typeof SET_PROFILE, profile: PostsType }
export type SetStatusType = { type: typeof SET_STATUS, status: string }
export type SetPhotoType = { type: typeof SET_PHOTO, photo: string }