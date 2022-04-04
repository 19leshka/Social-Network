import s from './User.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
    const photo = props.user.img;
    
    const onFollow = (id) => {
        props.followUser(id);
    }

    const onUnfollow = (id) => {
        props.unfollowUser(id);
    }

    return (
        <div className={s.friend} key={props.user.id}>
            <NavLink className={s.userLink} to={`/profile/${props.user.id}`}>
                <div className={s.ProfileInfo}>
                    <div className={s.ProfileImg}>
                        <img src={props.user.img == null ? userPhoto : photo} alt="" />
                    </div>
                    <div className={s.ProfileName}>
                        <h3>{props.user.name}</h3>
                    </div>
                </div>
            </NavLink>
            <div className={s.followBtn}>  
                {props.user.followed ? 
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} className={s.followBtnUnf} onClick={() => onUnfollow(props.user.id)}>Followed</button> :
                    <button disabled={props.isFollowing.some(id => id === props.user.id)} className={s.followBtnF} onClick={() => onFollow(props.user.id)}>Unfolowwed</button> 
                }
            </div>
        </div>
    );
}

export default User;
