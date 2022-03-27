const SET_USERS = "SET_USERS";
const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";

let initialUsers = []

const usersReducer = (users = initialUsers, action) => {
    let usersCopy = JSON.parse(JSON.stringify(users));
    switch (action.type) {
        case SET_USERS:
            let newUsers = JSON.parse(JSON.stringify(action.users));
            newUsers.forEach(user => usersCopy.push({
                id: user.id,
                name: user.name,
                img: user.photos.small,
                followed: user.followed
            }))
            return usersCopy;
        case UNFOLLOW:
            usersCopy.map(friend => {
                if(friend.id === action.id) friend.followed = false;
            });
            return usersCopy;
        case FOLLOW:
            usersCopy.map(friend => {
                if(friend.id === action.id) friend.followed = true;
            });
            return usersCopy;
        default:
            return usersCopy;
    }
}

export const setUsersActionCreater = (users = []) => ({
    type: SET_USERS,
    users: users   
})

export default usersReducer;