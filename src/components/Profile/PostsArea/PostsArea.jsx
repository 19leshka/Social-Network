import Post from './../../common/Post/Post';
import s from './PostsArea.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {useRef, useContext} from 'react';
import {IsMyProfile} from './../Profile';


const PostsArea = (props) => {
    let textarea = useRef(null);
    const isMyProfile = useContext(IsMyProfile);

    let postsElements =
        [...props.posts]
            .reverse()
            .map((p) => {
                if(typeof p.date == 'string'){
                    return  <Post key={p.id} isMyProfile={isMyProfile} deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={(props.userImg == null ? userPhoto : props.userImg)} date={p.date} />
                }else{
                    return <Post key={p.id} isMyProfile={isMyProfile} deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={(props.userImg == null ? userPhoto : props.userImg)} date={p.date.toLocaleDateString()} />
                }
            });

    const onCreatePost = () => {
        props.addPost();
    }

    const onUpdatePostText = () => {
        let text = textarea.current.value;
        props.updatePostText(text);
    } 
    
    return (
        <div className={s.postsArea}>
            <div className={s.createPost}>
                <div className={s.myProfileImg}>
                    <img src={(props.userImg == null ? userPhoto : props.userImg)} alt="" />
                </div>
                <textarea onChange={onUpdatePostText} ref={textarea} className={s.createPostInput} placeholder="What's new?" value={props.newPostValue}/>
                <div className={s.createPostBtn}>
                <button onClick={onCreatePost} className={s.PostBtn}>Post</button>
                </div>
            </div>
            {postsElements}
        </div>   
    );
}

export default PostsArea;