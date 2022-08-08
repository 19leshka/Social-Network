export enum UsersActionTypes {
    SET_USERS = "SET-USERS",
    SET_FRIENDS = "SET_FRIENDS",
    UNFOLLOW = "UNFOLLOW",
    FOLLOW = "FOLLOW",
    SET_USERS_PAGE = "SET-USERS-PAGE",
    SET_FRIENDS_PAGE = "SET-FRIENDS-PAGE",
    SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT",
    SET_TOTAL_FRIENDS_COUNT = "SET-TOTAL-FRIENDS-COUNT",
    TOGGLE_IS_FETCHING_USERS = "TOGGLE-IS-FETCHING-USERS",
    TOGGLE_IS_FETCHING_FRIENDS = "TOGGLE-IS-FETCHING-FRIENDS",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"
}

export interface UsersState {
    friends: Array<any>,
    users: Array<any>,
    pageSize: number,
    totalFriendsCount: null | number,
    totalUsersCount: null | number,
    currentUsersPage: number,
    currentFriendsPage: number,
    isFetchingUsers: boolean,
    isFetchingFriends: boolean,
    followingInProgress: Array<any>
}

interface SetUsersAction {
    type: UsersActionTypes.SET_USERS,
    value: Array<any>
}

interface SetFriendsAction {
    type: UsersActionTypes.SET_FRIENDS,
    value: Array<any>
}

interface SetCurrentUsersPageAction {
    type: UsersActionTypes.SET_USERS_PAGE,
    value: number
}

interface SetCurrentFriendsPageAction {
    type: UsersActionTypes.SET_FRIENDS_PAGE,
    value: number
}

interface SetTotalUsersCountAction {
    type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
    value: number
}

interface setTotalFriendsCountAction {
    type: UsersActionTypes.SET_TOTAL_FRIENDS_COUNT,
    value: number
}

interface ToggleIsFetchingUsersAction {
    type: UsersActionTypes.TOGGLE_IS_FETCHING_USERS,
    value: boolean
}

interface ToggleIsFetchingFriendsAction {
    type: UsersActionTypes.TOGGLE_IS_FETCHING_FRIENDS,
    value: boolean
}

interface ToggleIsFollowingProgressAction {
    type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
    value: boolean,
    id: number
}

interface FollowAction {
    type: UsersActionTypes.FOLLOW,
    id: number
}

interface UnfollowAction {
    type: UsersActionTypes.UNFOLLOW,
    id: number
}

export type UsersAction = SetUsersAction | SetFriendsAction |
    SetCurrentUsersPageAction | SetCurrentFriendsPageAction |
    SetTotalUsersCountAction | setTotalFriendsCountAction |
    ToggleIsFetchingUsersAction | ToggleIsFetchingFriendsAction |
    ToggleIsFollowingProgressAction | FollowAction | UnfollowAction