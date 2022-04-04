import s from './Friend.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {NavLink} from 'react-router-dom';

const Friend = (props) => {
    const photo = window.location.origin + props.friend.img; 

    const onFollow = (id) => {
        props.follow(id);
    }

    const onUnfollow = (id) => {
        props.unfollow(id);
    }

    return (
        <div className={s.friend} key={props.friend.id}>
            <NavLink className={s.userLink} to={`/profile/${props.friend.id}`}>   
                <div className={s.ProfileInfo}>
                    <div className={s.ProfileImg}>
                        <img src={props.friend.img == null ? userPhoto : photo} alt="" />
                    </div>
                    <div className={s.ProfileName}>
                        <h3>{props.friend.name}</h3>
                    </div>
                </div>
            </NavLink>
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
