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

export const setUsersActionCreater = (users = []) => ({
    type: SET_USERS,
    users: users   
});

export const setCurrentPageActionCreater = (page = 1) => ({
    type: SET_PAGE,
    value: page
});

export const toggleIsFetchingActionCreater = (value = true) => ({
    type: TOGGLE_IS_FETCHING,
    value: value
})

export const toggleIsFollowingProgressActionCreater = (value = true, id) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    value: value,
    id: id
})

export default usersReducer;