import s from './Post.module.css';

const Post = (props) => {
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
                <div className={s.delPost}>x</div>
            </div>
            <div className={s.postText}>
                <p>{props.text}</p>    
            </div>
        </div>   
    );
}

export default Post;