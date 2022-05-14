import {followActionCreator} from './friends-reducer';
import {unfollowActionCreator} from './friends-reducer';
import {getUsers} from './../api/api';
import {getFriends} from './../api/api';
import {followUser} from './../api/api';
import {unfollowUser} from './../api/api';

const SET_USERS = "SET-USERS";
const SET_FRIENDS = "SET_FRIENDS";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_USERS_PAGE = "SET-USERS-PAGE";
const SET_FRIENDS_PAGE = "SET-FRIENDS-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_TOTAL_FRIENDS_COUNT = "SET-TOTAL-FRIENDS-COUNT";
const TOGGLE_IS_FETCHING_USERS = "TOGGLE-IS-FETCHING-USERS";
const TOGGLE_IS_FETCHING_FRIENDS = "TOGGLE-IS-FETCHING-FRIENDS";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialUsers = {
    friends: [],
    users: [],
    pageSize: 5,
    totalFriendsCount: null,
    totalUsersCount: null,
    currentUsersPage: 1,
    currentFriendsPage: 1,
    isFetchingUsers: true,
    isFetchingFriends: true,
    followingInProgress: []
}

const usersReducer = (users = initialUsers, action) => {
    let usersCopy = JSON.parse(JSON.stringify(users));
    switch (action.type) {
        case SET_USERS:
            let apiUsers = JSON.parse(JSON.stringify(action.value));
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
        case SET_FRIENDS:
            let apiFriends = JSON.parse(JSON.stringify(action.value));
            let newFriens = apiFriends.map(friend => ({
                id: friend.id,
                name: friend.name,
                img: friend.photos.small,
                followed: friend.followed
            }));
            return {
                ...usersCopy,
                friends: newFriens
            };
        case UNFOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = false;
            });
            usersCopy.friends.forEach(user => {
                if(user.id === action.id) user.followed = false;
            });
            return {...usersCopy};
        case FOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = true;
            });
            usersCopy.friends.forEach(user => {
                if(user.id === action.id) user.followed = true;
            });
            return {...usersCopy};
        case SET_USERS_PAGE:
            return {
                ...usersCopy,
                currentUsersPage: action.value
            };
        case SET_FRIENDS_PAGE:
            return {
                ...usersCopy,
                currentFriendsPage: action.value
            };
        case TOGGLE_IS_FETCHING_USERS:
            return {
                ...usersCopy,
                isFetchingUsers: action.value
            }
        case TOGGLE_IS_FETCHING_FRIENDS:
            return {
                ...usersCopy,
                isFetchingFriends: action.value
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...usersCopy,
                followingInProgress: action.value 
                    ? [...usersCopy.followingInProgress, action.id] 
                    : [...usersCopy.followingInProgress.filter(id => id != action.id)]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...usersCopy,
                totalUsersCount: action.value
            }
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...usersCopy,
                totalFriendsCount: action.value
            }
        default:
            return usersCopy;
    }
}

export const setUsersActionCreator = (users = []) => ({
    type: SET_USERS,
    value: users   
});

export const setFriendsActionCreator = (friends = []) => ({
    type: SET_FRIENDS,
    value: friends   
});

export const setCurrentUsersPageActionCreator = (page = 1) => ({
    type: SET_USERS_PAGE,
    value: page
});

export const setCurrentFriendsPageActionCreator = (page = 1) => ({
    type: SET_FRIENDS_PAGE,
    value: page
});

export const setTotalUsersCountActionCreator = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    value: count
});

export const setTotalFriendsCountActionCreator = (count) => ({
    type: SET_TOTAL_FRIENDS_COUNT,
    value: count
});

export const toggleIsFetchingUsersActionCreator = (value = true) => ({
    type: TOGGLE_IS_FETCHING_USERS,
    value: value
})

export const toggleIsFetchingFriendsActionCreator = (value = true) => ({
    type: TOGGLE_IS_FETCHING_FRIENDS,
    value: value
})

export const toggleIsFollowingProgressActionCreator = (value = true, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    value: value,
    id: id
})

export const getUsersThunkCreator = (currentPage = 1, pageSize = 5) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingUsersActionCreator(true));
        getUsers(currentPage, pageSize).then(response => {
            dispatch(setTotalUsersCountActionCreator(response.totalCount));
            return response.items;
        }).then(response => {
            dispatch(setCurrentUsersPageActionCreator(currentPage));
            dispatch(setUsersActionCreator(response));
            dispatch(toggleIsFetchingUsersActionCreator(false));
        });
    }
}

export const getFriendsThunkCreator = (currentPage = 1, pageSize = 5) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingFriendsActionCreator(true));
        const response = await getFriends(currentPage, pageSize);
        dispatch(setTotalFriendsCountActionCreator(response.totalCount));
        dispatch(setCurrentFriendsPageActionCreator(currentPage));
        dispatch(setFriendsActionCreator(response.items));
        dispatch(toggleIsFetchingFriendsActionCreator(false));
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