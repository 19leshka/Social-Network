import Post from './Post/Post';
import s from './PostsArea.module.css';
import {useRef} from 'react';


const PostsArea = (props) => {
    let textarea = useRef(null);

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => {
                if(typeof p.date == 'string'){
                    return    <Post deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={p.avatarImg} date={p.date} />;
                }else{
                    return <Post deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={p.avatarImg} date={p.date.toLocaleDateString()} />
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
                    <img src={window.location.origin + '/img/myProfileImg.jpg'} alt="" />
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