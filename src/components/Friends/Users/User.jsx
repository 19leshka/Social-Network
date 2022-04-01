import s from './User.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {NavLink} from "react-router-dom";
import { followUser } from '../../../api/api';
import { unfollowUser } from '../../../api/api';

const User = (props) => {
    const photo = window.location.origin + props.user.img;

    const onFollow = (id) => {
        props.setIsFollowing(true, id);
        followUser(id).then(response => {
            if(response.data.resultCode == 0) {
                props.follow(id);
            }
            props.setIsFollowing(false, id);
        })
    }

    const onUnfollow = (id) => {
        props.setIsFollowing(true, id);
        unfollowUser(id).then(response => {
            if(response.data.resultCode == 0) {
                props.unfollow(id);
            }
            props.setIsFollowing(false, id);
        })
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
