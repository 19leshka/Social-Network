export enum NewsActionTypes {
    SET_POSTS = "SET_POSTS"
}

export interface NewsState {
    posts: Array<IPost>
}

export interface IPost {
    avatarImg: null | string,
    userId: number,
    postText: string,
    date: null | string,
    id: number
}

interface SetPostAction {
    type: NewsActionTypes.SET_POSTS,
    payload: Array<{
        userId: number,
        id: number,
        title: string,
        body: string
    }>
}

export type NewsAction = SetPostAction;