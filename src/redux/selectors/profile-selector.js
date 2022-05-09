import { createSelector } from 'reselect';

const getProfileSuper = (state) => {
    return state.myProfile.profile;
}

export const getProfile = createSelector( getProfileSuper, (profile) => {
    return profile;
})

export const getIsPostArea = (state) => {
    return state.myProfile.isPostArea;
}

export const getMyStatus = (state) => {
    return state.myProfile.myStatus;
}

export const getLocation = (state) => {
    return state.myProfile.currentPageId;
}