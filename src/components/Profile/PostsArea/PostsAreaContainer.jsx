import { addPostActionCreater } from "../../../redux/profile-reducer";
import { updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import PostArea from "./PostsArea";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.myProfile.posts,
        newPostValue: state.myProfile.newPostValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updatePostText: (text) => {
            dispatch(updateNewPostTextActionCreater(text));
        }
    }
}

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostArea)

export default PostsAreaContainer;