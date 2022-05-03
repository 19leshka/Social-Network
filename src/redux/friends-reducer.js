import maxVirko from './../assets/friends/MaxVyrkoProfileImg.jpg';
import nikPutsik from './../assets/friends/NikitaPutsikProfileImg.jpg';
import ivanLuzinov from './../assets/friends/IvanLuzinovProfileImg.jpg';
import umarBhat from './../assets/friends/UmarBhatProfileImg.jpg';
import maxMalinets from './../assets/friends/MaxMalinetsProfileImg.jpg';

const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";

let myFriends = [
    {
        id: 1,
        name: "Максим Вырко",
        img: maxVirko,
        followed: true
    }, 
    {
        id: 2,
        name: "Никита Пуцик",
        img: nikPutsik,
        followed: true
    }, 
    {
        id: 3,
        name: "Иван Лузинов",
        img: ivanLuzinov,
        followed: true
    }, 
    {
        id: 4,
        name: "Умар Бхат",
        img: umarBhat,
        followed: true
    }, 
    {
        id: 5,
        name: "Максим Малинец",
        img: maxMalinets,
        followed: true
    }, 
    {
        id: 6,
        name: "Игорь Шаровский",
        img: null,
        followed: true
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

export const followActionCreator = (id) => ({
    type: FOLLOW,
    id: id
})

export const unfollowActionCreator = (id) => ({
    type: UNFOLLOW,
    id: id
})

export default friendsReducer;