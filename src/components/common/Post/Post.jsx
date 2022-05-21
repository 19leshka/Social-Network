import s from './Post.module.css';

const Post = (props) => {
    const onDeletePost = () => {
        props.deletePost(props.id)
    }

    return (
        <div className={s.post}>
            <div className={s.postInfo}>
                <div className={s.postHeader}>
                    <div className={s.ProfileImg}>
                        <img src={props.imgSrc} alt="" />
                    </div>
                    <div className={s.postDate}>
                        <p>{props.date}</p>
                    </div>
                </div>
                {
                    props.isMyProfile
                    ? <div className={s.delPost} onClick={() => onDeletePost()}>x</div>
                    : null
                }
            </div>
            <div className={s.postText}>
                <p>{props.text}</p>    
            </div>
        </div>   
    );
}

export default Post;