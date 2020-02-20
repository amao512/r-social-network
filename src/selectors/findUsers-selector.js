import { createSelector } from "reselect";

const getUsersSelector = state => {
    return state.findUsers.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
}) 

//-----------------------------------------------------------------------------------

const getPageSizeSelector = state => {
    return state.findUsers.pageSize;
}

export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize;
})

//------------------------------------------------------------------------------------

const getTotalUsersCountSelector = state => {
    return state.findUsers.totalCount;
}

export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalCount) => {
    return totalCount;
})

//---------------------------------------------------------------------------------------------

const getCurrentPageSelector = state => {
    return state.findUsers.currentPage;
}

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) => {
    return currentPage;
})

//--------------------------------------------------------------------------------------------

const getTermSelector = state => {
    return state.findUsers.currentTerm;
}

export const getTerm = createSelector(getTermSelector, (currentTerm) => {
    return currentTerm;
})

//---------------------------------------------------------------------------------------------

const getIsLoadingSelector = state => {
    return state.findUsers.isLoading;
}

export const getIsLoading = createSelector(getIsLoadingSelector, (isLoading) => {
    return isLoading;
})

//-----------------------------------------------------------------------------------------

const getIsFollowingProgressingSelector = state => {
    return state.findUsers.isFollowingProgressing;
}

export const getIsFollowingProgressing = createSelector(getIsFollowingProgressingSelector, (isFollowingProgressing) => {
    return isFollowingProgressing;
})