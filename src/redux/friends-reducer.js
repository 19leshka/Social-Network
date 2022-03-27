const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";

let myFriends = [
    {
        id: 1,
        name: "Максим Вырко",
        img: "/img/MaxVyrkoProfileImg.jpg",
        followed: true
    }, 
    {
        id: 2,
        name: "Никита Пуцик",
        img: "/img/NikitaPutsikProfileImg.jpg",
        followed: false
    }, 
    {
        id: 3,
        name: "Иван Лузинов",
        img: "/img/IvanLuzinovProfileImg.jpg",
        followed: true
    }, 
    {
        id: 4,
        name: "Умар Бхат",
        img: "/img/UmarBhatProfileImg.jpg",
        followed: true
    }, 
    {
        id: 5,
        name: "Максим Малинец",
        img: "/img/MaxMalinetsProfileImg.jpg",
        followed: true
    }, 
    {
        id: 6,
        name: "Игорь Шаровский",
        img: null,
        followed: false
    }
]

const friendsReducer = (friends = myFriends, action) => {
    let friendsCopy = JSON.parse(JSON.stringify(friends));
    switch (action.type) {
        case UNFOLLOW:
            friendsCopy.map(friend => {
                if(friend.id === action.id) friend.followed = false;
            });
            return friendsCopy;
        case FOLLOW:
            friendsCopy.map(friend => {
                if(friend.id === action.id) friend.followed = true;
            });
            return friendsCopy;
        default:
            return friendsCopy;
    }
}

export const followActionCreater = (id) => ({
    type: FOLLOW,
    id: id
})

export const unfollowActionCreater = (id) => ({
    type: UNFOLLOW,
    id: id
})

export default friendsReducer;