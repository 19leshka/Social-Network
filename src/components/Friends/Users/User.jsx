import s from './User.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
    const photo = window.location.origin + props.user.img; 

    const onFollow = (id) => {
        props.follow(id);
    }

    const onUnfollow = (id) => {
        props.unfollow(id);
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
                    <button className={s.followBtnUnf} onClick={() => onUnfollow(props.user.id)}>Followed</button> :
                    <button className={s.followBtnF} onClick={() => onFollow(props.user.id)}>Unfolowwed</button> 
                }
            </div>
        </div>
    );
}

export default User;
