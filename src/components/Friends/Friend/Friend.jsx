import s from './Friend.module.css';

const Friend = (props) => {
    // debugger
    const onFollow = (id) => {
        props.follow(id);
    }

    const onUnfollow = (id) => {
        props.unfollow(id);
    }

    return (
        <div className={s.friend} key={props.friend.id}>
            <div className={s.ProfileInfo}>
                <div className={s.ProfileImg}>
                    <img src={window.location.origin + props.friend.img} alt="" />
                </div>
                <div className={s.ProfileName}>
                    <h3>{props.friend.name}</h3>
                </div>
            </div>
            <div className={s.followBtn}>
                {props.friend.followed ? 
                    <button className={s.followBtnUnf} onClick={() => onUnfollow(props.friend.id)}>Followed</button> :
                    <button className={s.followBtnF} onClick={() => onFollow(props.friend.id)}>Unfolowwed</button> 
                }
            </div>
        </div>
    );
}

export default Friend;
