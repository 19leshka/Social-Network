import {getUserProfile} from './../api/api';
import {profileAPI} from './../api/api';

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_IS_POST_AREA = "SET-IS-POST-AREA";
const SET_MY_STATUS = "SET-MY-STATUS";
const DELETE_POST = "DELETE-POST";
const SET_CURRENT_PAGE_ID = "SET-CURRENT-PAGE-ID";

let initialProfile = {
    myProfile: {
        userId: 0,
        fullName: "Alexey Balakhanov",
        aboutMe: null,
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
    myStatus: "",
    profile: null,
    isPostArea: null,
    currentPageId: 0
}

const profileReducer = (profile = initialProfile, action) => {
    let profileCopy = JSON.parse(JSON.stringify(profile));
    switch (action.type) {
        case ADD_POST:
            if(profileCopy.newPostValue === "") return  profile;
            let newPost = {
                avatarImg: (window.location.origin + '/img/myProfileImg.jpg'),
                postText: profileCopy.newPostValue,
                date: (new Date()).toLocaleDateString(),
                id: profileCopy.posts.length + 1
            }
            profileCopy.posts.push(newPost);
            profileCopy.newPostValue = "";
            return profileCopy;
        case CHANGE_POST_TEXT:
            profileCopy.newPostValue = action.newText;
            return profileCopy;
        case SET_USER_PROFILE:
            if(action.value === null) return {...profileCopy, profile: null};
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
            return {...profileCopy, profile: profile}
        case SET_IS_POST_AREA:
            return {...profileCopy, isPostArea: action.value}
        case SET_MY_STATUS:
            profileCopy.myStatus = action.value;
            return {...profileCopy}
        case DELETE_POST:
            let withDeletedPost = profileCopy.posts.filter(post => {
                if(post.id != action.value) return post;
            })
            return {...profileCopy, posts: withDeletedPost}
        case SET_CURRENT_PAGE_ID:
            return {...profileCopy, currentPageId: action.value}
        default: 
            return profileCopy;
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

export const setIsPostAreaActionCreator = (value) => ({
    type: SET_IS_POST_AREA,
    value: value
})

export const setMyProfileStatusActionCreator = (value) => ({
    type: SET_MY_STATUS,
    value: value
})

export const setCurrentPageIdActionCreator = (value) => ({
    type: SET_CURRENT_PAGE_ID,
    value: value
})

export const deletePostActionCreater = (value) => ({
    type: DELETE_POST,
    value: value
})

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setUserProfileActionCreator(null));
        if(userId == 0){
            dispatch(setUserProfileActionCreator(initialProfile.myProfile));
            dispatch(setIsPostAreaActionCreator(true));
        }else{
            getUserProfile(userId).then(response => {
                dispatch(setUserProfileActionCreator(response));
            });   
            dispatch(setIsPostAreaActionCreator(false));
        }
    }
}

export const getProfileStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then((response) => {
            if(response.data !== null) return response.data;
            else return "Set sss"
        }).then((response) => {
            dispatch(setMyProfileStatusActionCreator(response));
        })
    }
}

export default profileReducer;