import {getUserProfile} from './../api/api';

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialProfile = {
    myProfile: {
        userId: 0,
        fullName: "Alexey Balakhanov",
        status: "Set status",
        birthday: "19.02.2003",
        city: "Minsk",
        photos: {
            large: window.location.origin + '/img/profileImg.png',
            small: null
        }
    },
    posts: [
        {
            avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
            postText: "I was born",
            date: "19.02.2003",
            id: 1
        },
        {
            avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
            postText: "Yesterday I start to watch Euphoria.",
            date: "20.01.2022",
            id: 2
        },
        {
            avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
            postText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa eius quidem accusamus unde at perspiciatis aliquam voluptates debitis aliquid, exercitationem sapiente modi quasi dolore officia error dignissimos. Dignissimos repudiandae eum magnam non dolorem, ea quidem laborum harum eaque nulla!",
            date: "23.01.2022",
            id: 3
        },
        {
            avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
            postText: "No war",
            date: "24.02.2022",
            id: 4
        }
    ],
    newPostValue: "",
    profile: null,
    isPostArea: true
}

const profileReducer = (myProfile = initialProfile, action) => {
    let myProfileCopy = JSON.parse(JSON.stringify(myProfile));
    switch (action.type) {
        case ADD_POST:
            if(myProfileCopy.newPostValue === "") return  myProfile;
            let newPost = {
                avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                postText: myProfileCopy.newPostValue,
                date: (new Date()).toLocaleDateString(),
                id: myProfileCopy.posts.length + 1
            }
            myProfileCopy.posts.push(newPost);
            myProfileCopy.newPostValue = "";
            return myProfileCopy;
        case CHANGE_POST_TEXT:
            myProfileCopy.newPostValue = action.newText;
            return myProfileCopy;
        case SET_USER_PROFILE:
            let bd = "birthday" in action.value;
            let ct = "city" in action.value;
            let profile = {
                userId: action.value.userId,
                fullName: action.value.fullName,
                status: action.value.aboutMe,
                birthday: bd ? action.value.birthday : null,
                city: ct ? action.value.city :null,
                photos: {
                    large: action.value.photos.large,
                    small: action.value.photos.small
                }
            }
            return {...myProfileCopy, profile: profile}
        default: 
            return myProfileCopy;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: CHANGE_POST_TEXT, 
    newText: text
})

export const setUserProfileActionCreator = (profile) => ({
    type: SET_USER_PROFILE,
    value: profile
})

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if(userId == 0){
            dispatch(setUserProfileActionCreator(initialProfile.myProfile));
            initialProfile.isPostArea = true;
        }else{
            getUserProfile(userId).then(response => {
                dispatch(setUserProfileActionCreator(response));
            });   
            initialProfile.isPostArea = false;
        }
    }
}

export default profileReducer;