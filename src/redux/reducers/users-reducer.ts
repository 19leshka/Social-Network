import {getUsers} from '../../api/api';
import {getFriends} from '../../api/api';
import {followUser} from '../../api/api';
import {unfollowUser} from '../../api/api';
import {UsersAction, UsersActionTypes, UsersState} from "../types/users";

let initialUsers: UsersState = {
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

const usersReducer = (users = initialUsers, action: UsersAction): UsersState => {
    let usersCopy = JSON.parse(JSON.stringify(users));
    switch (action.type) {
        case UsersActionTypes.SET_USERS:
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
        case UsersActionTypes.SET_FRIENDS:
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
        case UsersActionTypes.UNFOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = false;
            });
            usersCopy.friends.forEach(user => {
                if(user.id === action.id) user.followed = false;
            });
            return {...usersCopy};
        case UsersActionTypes.FOLLOW:
            usersCopy.users.forEach(user => {
                if(user.id === action.id) user.followed = true;
            });
            usersCopy.friends.forEach(user => {
                if(user.id === action.id) user.followed = true;
            });
            return {...usersCopy};
        case UsersActionTypes.SET_USERS_PAGE:
            return {
                ...usersCopy,
                currentUsersPage: action.value
            };
        case UsersActionTypes.SET_FRIENDS_PAGE:
            return {
                ...usersCopy,
                currentFriendsPage: action.value
            };
        case UsersActionTypes.TOGGLE_IS_FETCHING_USERS:
            return {
                ...usersCopy,
                isFetchingUsers: action.value
            }
        case UsersActionTypes.TOGGLE_IS_FETCHING_FRIENDS:
            return {
                ...usersCopy,
                isFetchingFriends: action.value
            }
        case UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...usersCopy,
                followingInProgress: action.value 
                    ? [...usersCopy.followingInProgress, action.id] 
                    : [...usersCopy.followingInProgress.filter(id => id != action.id)]
            }
        case UsersActionTypes.SET_TOTAL_USERS_COUNT:
            return {
                ...usersCopy,
                totalUsersCount: action.value
            }
        case UsersActionTypes.SET_TOTAL_FRIENDS_COUNT:
            return {
                ...usersCopy,
                totalFriendsCount: action.value
            }
        default:
            return usersCopy;
    }
}

export const setUsersActionCreator = (users = []) => ({
    type: UsersActionTypes.SET_USERS,
    value: users   
});

export const setFriendsActionCreator = (friends = []) => ({
    type: UsersActionTypes.SET_FRIENDS,
    value: friends   
});

export const setCurrentUsersPageActionCreator = (page = 1) => ({
    type: UsersActionTypes.SET_USERS_PAGE,
    value: page
});

export const setCurrentFriendsPageActionCreator = (page = 1) => ({
    type: UsersActionTypes.SET_FRIENDS_PAGE,
    value: page
});

export const setTotalUsersCountActionCreator = (count) => ({
    type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
    value: count
});

export const setTotalFriendsCountActionCreator = (count) => ({
    type: UsersActionTypes.SET_TOTAL_FRIENDS_COUNT,
    value: count
});

export const toggleIsFetchingUsersActionCreator = (value = true) => ({
    type: UsersActionTypes.TOGGLE_IS_FETCHING_USERS,
    value: value
})

export const toggleIsFetchingFriendsActionCreator = (value = true) => ({
    type: UsersActionTypes.TOGGLE_IS_FETCHING_FRIENDS,
    value: value
})

export const toggleIsFollowingProgressActionCreator = (value = true, id) => ({
    type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
    value: value,
    id: id
})

export const followActionCreator = (id) => ({
    type: UsersActionTypes.FOLLOW,
    id: id
})

export const unfollowActionCreator = (id) => ({
    type: UsersActionTypes.UNFOLLOW,
    id: id
})

export const getUsersThunkCreator = (currentPage = 1, pageSize = 5) => async (dispatch) => {
    dispatch(toggleIsFetchingUsersActionCreator(true));
    const response = await getUsers(currentPage, pageSize);
    dispatch(setTotalUsersCountActionCreator(response.totalCount));
    dispatch(setCurrentUsersPageActionCreator(currentPage));
    dispatch(setUsersActionCreator(response.items));
    dispatch(toggleIsFetchingUsersActionCreator(false));
}

export const getFriendsThunkCreator = (currentPage = 1, pageSize = 5) => async (dispatch) => {
    dispatch(toggleIsFetchingFriendsActionCreator(true));
    const response = await getFriends(currentPage, pageSize);
    dispatch(setTotalFriendsCountActionCreator(response.totalCount));
    dispatch(setCurrentFriendsPageActionCreator(currentPage));
    dispatch(setFriendsActionCreator(response.items));
    dispatch(toggleIsFetchingFriendsActionCreator(false));
}

export const getFollowUserThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleIsFollowingProgressActionCreator(true, id));
    const response = await followUser(id)
    if(response.data.resultCode == 0) {
        dispatch(followActionCreator(id));
    }
    dispatch(toggleIsFollowingProgressActionCreator(false, id));
}

export const getUnfollowUserThunkCreator = (id) => async (dispatch) => {
    dispatch(toggleIsFollowingProgressActionCreator(true, id));
    const response = await unfollowUser(id);
    if(response.data.resultCode == 0) {
        dispatch(unfollowActionCreator(id));
    }
    dispatch(toggleIsFollowingProgressActionCreator(false, id));
}

export default usersReducer;