import { newsAPI } from "../api/api";
const SET_POSTS = "SET_POSTS";
const initialNews = {
    posts: [

    ]
}

const newsReducer = (news = initialNews, action) => {
    let newsCopy = JSON.parse(JSON.stringify(news));
    switch(action.type) {
        case SET_POSTS:
            let posts = [];
            action.value.forEach(post => {
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
    type: SET_POSTS,
    value: posts
})

export const getPostsThunkCreator = () => async (dispatch) => {
    const response = await newsAPI.getPosts();
    const posts = response.data;
    dispatch(setPostsActionCreator(posts));
}

export default newsReducer;