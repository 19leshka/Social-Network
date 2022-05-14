import {getUserProfile} from './../api/api';
import {profileAPI} from './../api/api';
import {store} from './redux-store';

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_IS_POST_AREA = "SET-IS-POST-AREA";
const SET_MY_STATUS = "SET-MY-STATUS";
const DELETE_POST = "DELETE-POST";
const SET_CURRENT_PAGE_ID = "SET-CURRENT-PAGE-ID";
const SET_MY_PROFILE_IMG = "SET-MY-PROFILE-IMG";
const SET_FULL_INFO = "SET-FULL-INFO";

const nullProfile = JSON.stringify({
    birthday: null,
    city: null,
    contacts: {
        facebook: null,
        github: null,
        instagram: null,
        mainLink: null,
        twitter: null,
        vk: null,
        website: null,
        youtube: null
    },
    fullName: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    photos: {
        large: null, 
        small: null
    },
    status: null,
    userId: null
})

let initialProfile = {
    posts: [
        {
            avatarImg: null,
            postText: "I was born",
            date: "19.02.2003",
            id: 1
        },
        {
            avatarImg: null,
            postText: "Yesterday I start to watch Euphoria.",
            date: "20.01.2022",
            id: 2
        },
        {
            avatarImg: null,
            postText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa eius quidem accusamus unde at perspiciatis aliquam voluptates debitis aliquid, exercitationem sapiente modi quasi dolore officia error dignissimos. Dignissimos repudiandae eum magnam non dolorem, ea quidem laborum harum eaque nulla!",
            date: "23.01.2022",
            id: 3
        },
        {
            avatarImg: null,
            postText: "No war",
            date: "24.02.2022",
            id: 4
        }
    ],
    newPostValue: "",
    myStatus: "",
    profile: JSON.parse(nullProfile),
    isPostArea: null,
    currentPageId: null
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
            if(action.value === null) return {...profileCopy, profile: JSON.parse(nullProfile)};
            let bd = "birthday" in action.value;
            let ct = "city" in action.value;
            let profile = {
                userId: action.value.userId,
                lookingForAJob: (action.value.lookingForAJob != null) ? !!action.value.lookingForAJob : null,
                lookingForAJobDescription: (action.value.lookingForAJobDescription != null) ? !!action.value.lookingForAJob : null,
                fullName: action.value.fullName,
                status: action.value.aboutMe,
                birthday: bd ? action.value.birthday : null,
                city: ct ? action.value.city :null,
                photos: {
                    large: action.value.photos.large,
                    small: action.value.photos.small
                },
                contacts: {
                    github: (action.value.contacts.github != null) ? action.value.contacts.github : null,
                    vk: (action.value.contacts.vk != null) ? action.value.contacts.vk : null,
                    facebook: (action.value.contacts.facebook != null) ? action.value.contacts.facebook : null,
                    instagram: (action.value.contacts.instagram != null) ? action.value.contacts.instagram : null,
                    twitter: (action.value.contacts.twitter != null) ? action.value.contacts.twitter : null,
                    website: (action.value.contacts.website != null) ? action.value.contacts.website : null,
                    youtube: (action.value.contacts.youtube != null) ? action.value.contacts.youtube : null,
                    mainLink: (action.value.contacts.mainLink != null) ? action.value.contacts.mainLink : null
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
        case SET_MY_PROFILE_IMG:
            let photos = JSON.parse(JSON.stringify(action.value));
            profileCopy.profile.photos = photos;
            let newProfile = profileCopy;
            return {...newProfile};
        case SET_FULL_INFO: 
            let profileFullInfo = profileCopy.profile;
            profileFullInfo.lookingForAJob = action.value.lookingForAJob;
            profileFullInfo.lookingForAJobDescription = action.value.lookingForAJobDescription;
            profileFullInfo.contacts = action.value.contacts;
            return {...profileCopy, profile: profileFullInfo};
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

export const setMyProfileImgActionCreator = (value) => ({
    type: SET_MY_PROFILE_IMG,
    value: value
})

export const setFullInfoActionCreator = (value) => ({
    type: SET_FULL_INFO,
    value: value
})

export const getUserProfileThunkCreator = (userId, currentId) => {
    return async (dispatch) => {
        dispatch(setUserProfileActionCreator(null));
        let response = await getUserProfile(userId)
        dispatch(setUserProfileActionCreator(response));
        if(userId == currentId) {
            dispatch(setIsPostAreaActionCreator(true));
        }else{
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

export const savePhotoThunkCreator = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.setPhoto(file);
        if(response.data.resultCode === 0) {
            dispatch(setMyProfileImgActionCreator(response.data.data.photos));
        }
    }
}

export const saveFullInfoThunkCreator = (value) => {
    return async (dispatch) => {
        let response = await profileAPI.saveFullInfo(value);
        if (response.data.resultCode === 0) {
            dispatch(setFullInfoActionCreator(value));
            dispatch(getUserProfileThunkCreator(value.userId, value.userId))
        }
    }
}

export default profileReducer;