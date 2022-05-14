import Post from './Post/Post';
import s from './PostsArea.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {useRef} from 'react';


const PostsArea = (props) => {
    let textarea = useRef(null);

    let postsElements =
        [...props.posts]
            .reverse()
            .map((p) => {
                if(typeof p.date == 'string'){
                    return  <Post key={p.id} deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={(props.userImg == null ? userPhoto : props.userImg)} date={p.date} />
                }else{
                    return <Post key={p.id} deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={(props.userImg == null ? userPhoto : props.userImg)} date={p.date.toLocaleDateString()} />
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