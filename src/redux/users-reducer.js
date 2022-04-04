import {followActionCreator} from './friends-reducer';
import {unfollowActionCreator} from './friends-reducer';
import {getUsersPage} from './../api/api';
import {followUser} from './../api/api';
import {unfollowUser} from './../api/api';

const SET_USERS = "SET-USERS";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_PAGE = "SET-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialUsers = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (users = initialUsers, action) => {
    let usersCopy = JSON.parse(JSON.stringify(users));
    switch (action.type) {
        case SET_USERS:
            let apiUsers = JSON.parse(JSON.stringify(action.users));
            let newUsers = apiUsers.map(user => ({
                id: user.id,
                name: user.name,
                img: user.photos.small,
                followed: user.followed
            }))
            
            return {
                ...usersCopy,
                users: newUsers
            };
            
        case UNFOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = false;
            });
            return {...usersCopy};
        case FOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = true;
            });
            return {...usersCopy};
        case SET_PAGE:
            return {
                ...usersCopy,
                currentPage: action.value
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...usersCopy,
                isFetching: action.value
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...usersCopy,
                followingInProgress: action.value 
                    ? [...usersCopy.followingInProgress, action.id] 
                    : [...usersCopy.followingInProgress.filter(id => id != action.id)]
            }
        default:
            return usersCopy;
    }
}

export const setUsersActionCreator = (users = []) => ({
    type: SET_USERS,
    users: users   
});

export const setCurrentPageActionCreator = (page = 1) => ({
    type: SET_PAGE,
    value: page
});

export const toggleIsFetchingActionCreator = (value = true) => ({
    type: TOGGLE_IS_FETCHING,
    value: value
})

export const toggleIsFollowingProgressActionCreator = (value = true, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    value: value,
    id: id
})

export const getUsersThunkCreator = (currentPage = 1, pageSize = 5) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true));
        getUsersPage(currentPage, pageSize).then(response => {
            dispatch(setCurrentPageActionCreator(currentPage));
            dispatch(setUsersActionCreator(response));
            dispatch(toggleIsFetchingActionCreator(false));
        });
    }
}

export const getFollowUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, id));
        followUser(id).then(response => {
            if(response.data.resultCode == 0) {
               dispatch(followActionCreator(id));
            }
            dispatch(toggleIsFollowingProgressActionCreator(false, id));
        })
    }
}

export const getUnfollowUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgressActionCreator(true, id));
        unfollowUser(id).then(response => {
            if(response.data.resultCode == 0) {
                dispatch(unfollowActionCreator(id));
            }
            dispatch(toggleIsFollowingProgressActionCreator(false, id));
        })
    }
}

export default usersReducer;