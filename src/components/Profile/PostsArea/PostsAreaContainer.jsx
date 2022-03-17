import { addPostActionCreater } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import PostArea from "./PostsArea";


const PostsAreaContainer = (props) => {
    
    const createPost = () => {
        props.dispatch(addPostActionCreater());
    }

    const updatePostText = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <PostArea addPost={createPost} updatePostText={updatePostText} posts={props.myProfile.posts} newPostValue={props.myProfile.newPostValue}/>
    );
}

export default PostsAreaContainer;