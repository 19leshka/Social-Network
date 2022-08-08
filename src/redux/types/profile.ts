export enum ProfileActionTypes {
    ADD_POST = "ADD-POST",
    CHANGE_POST_TEXT = "CHANGE-POST-TEXT",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_IS_POST_AREA = "SET-IS-POST-AREA",
    SET_MY_STATUS = "SET-MY-STATUS",
    DELETE_POST = "DELETE-POST",
    SET_CURRENT_PAGE_ID = "SET-CURRENT-PAGE-ID",
    SET_MY_PROFILE_IMG = "SET-MY-PROFILE-IMG",
    SET_FULL_INFO = "SET-FULL-INFO"
}

export interface ProfileState {
    posts: Array<{
        avatarImg: null | string,
        postText: string,
        date: string,
        id: number
    }>,
    newPostValue: string,
    myStatus: string,
    isPostArea: null | boolean,
    currentPageId: null | number,
    profile: IProfile
}

export interface IProfile {
    birthday: null | string,
    city: null | string,
    contacts: {
        facebook: null | string,
        github: null | string,
        instagram: null | string,
        mainLink: null | string,
        twitter: null | string,
        vk: null | string,
        website: null | string,
        youtube: null | string
    },
    fullName: null | string,
    lookingForAJob: null | boolean,
    lookingForAJobDescription: null | boolean,
    photos: {
        large: null | string,
        small: null | string
    },
    status: null | string,
    aboutMe?: null | string,
    userId: null | number
}

interface AddPostAction {
    type: ProfileActionTypes.ADD_POST
}

interface UpdateNewPostTextAction {
    type: ProfileActionTypes.CHANGE_POST_TEXT,
    newText: string
}

interface SetUserProfileAction {
    type: ProfileActionTypes.SET_USER_PROFILE,
    value: IProfile
}

interface SetIsPostAreaAction {
    type: ProfileActionTypes.SET_IS_POST_AREA,
    value: boolean
}

interface SetMyProfileStatusAction {
    type: ProfileActionTypes.SET_MY_STATUS,
    value: string
}

interface SetCurrentPageIdAction {
    type: ProfileActionTypes.SET_CURRENT_PAGE_ID,
    value: number
}

interface DeletePostAction {
    type: ProfileActionTypes.DELETE_POST,
    value: number
}

interface SetMyProfileImgAction {
    type: ProfileActionTypes.SET_MY_PROFILE_IMG,
    value: string
}

interface SetFullInfoAction {
    type: ProfileActionTypes.SET_FULL_INFO,
    value: {
        aboutMe: null | string,
        contacts: {
            facebook: null | string,
            github: null | string,
            instagram: null | string,
            mainLink: null | string,
            twitter: null | string,
            vk: null | string,
            website: null | string,
            youtube: null | string,
        }
        fullName: null | string,
        lookingForAJob: boolean | null,
        lookingForAJobDescription: boolean | null,
        userId: number
    }
}

export type ProfileActions = AddPostAction | UpdateNewPostTextAction |
    SetUserProfileAction| SetIsPostAreaAction | SetMyProfileStatusAction |
    SetCurrentPageIdAction | DeletePostAction | SetMyProfileImgAction |
    SetFullInfoAction;