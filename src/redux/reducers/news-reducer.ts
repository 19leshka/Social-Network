import { newsAPI } from "../../api/api";
import {NewsAction, NewsActionTypes, NewsState} from "../types/news";

const initialNews: NewsState = {
    posts: [

    ]
}

const newsReducer = (news = initialNews, action: NewsAction): NewsState => {
    let newsCopy = JSON.parse(JSON.stringify(news));
    switch(action.type) {
        case NewsActionTypes.SET_POSTS:
            let posts = [];
            action.payload.forEach(post => {
                posts.push({
                    avatarImg: null,
                    userId: post.userId,
                    postText: post.body,
                    date: null,
                    id: post.id
                })
            });
            return {...newsCopy, posts: posts};
        default:
            return newsCopy;
    }
}

export const setPostsActionCreator = (posts) => ({
    type: NewsActionTypes.SET_POSTS,
    payload: posts
})

export const getPostsThunkCreator = () => async (dispatch) => {
    const response = await newsAPI.getPosts();
    const posts = response.data;
    dispatch(setPostsActionCreator(posts));
}

export default newsReducer;