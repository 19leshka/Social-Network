import s from './CreatePost.module.css';

const CreatePost = (props) => {
    return (
            <div className={s.createPost}>
                <div className={s.myProfileImg}>
                    <img src={window.location.origin + '/img/myProfileImg.jpg'} alt="" />
                </div>
                <textarea name="createPost" className={s.createPostInput} placeholder="What's new?"></textarea>
                <div className={s.createPostBtn}>
                <button className={s.PostBtn}>Post</button>
                </div>
            </div>
    );
}

export default CreatePost;