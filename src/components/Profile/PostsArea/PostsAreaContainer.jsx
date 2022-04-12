import {addPostActionCreator} from '../../../redux/profile-reducer';
import {updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {deletePostActionCreater} from '../../../redux/profile-reducer';
import PostArea from './PostsArea';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.myProfile.posts,
        newPostValue: state.myProfile.newPostValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        deletePost: (id) => {
            dispatch(deletePostActionCreater(id));
        }
    }
}

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostArea)

export default PostsAreaContainer;