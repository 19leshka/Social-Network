import { addPostActionCreater } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import PostArea from "./PostsArea";
import StoreContext from './../../../StoreContext';


const PostsAreaContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const posts = store.getState().myProfile.posts;
                    const newPostValue = store.getState().myProfile.newPostValue;

                    const createPost = () => {
                        store.dispatch(addPostActionCreater());
                    }
                
                    const updatePostText = (text) => {
                        let action = updateNewPostTextActionCreater(text);
                        store.dispatch(action);
                    }

                    return <PostArea addPost={createPost} updatePostText={updatePostText} posts={posts} newPostValue={newPostValue}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default PostsAreaContainer;