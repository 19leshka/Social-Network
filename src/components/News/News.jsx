import s from './News.module.css';
import Post from './../common/Post/Post';
import userPhoto from './../../assets/userPhoto.png';

const News = (props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map((p) => {
                    return  <Post key={p.id} isMyProfile={false} deletePost={props.deletePost} id={p.id} text={p.postText} imgSrc={(props.userImg == null ? userPhoto : props.userImg)} date={p.date} />
            });

    return (
        <div className={s.newsContainer}>
            {postsElements}
        </div>
    )
}

export default News;