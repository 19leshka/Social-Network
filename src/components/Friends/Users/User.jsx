import s from './User.module.css';
import userPhoto from './../../../assets/userPhoto.png';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import { useRef } from 'react';
import { followUser } from '../../../api/api';
import { unfollowUser } from '../../../api/api';

const User = (props) => {
    const photo = window.location.origin + props.user.img;
    let btn = useRef(null); 

    const onFollow = (id) => {
        // btn.current.classList.toggle('btnBefore');
        followUser(id).then(response => {
            if(response.data.resultCode == 0) {
                btn.current.classList.toggle('btnBefore');
                props.follow(id);
            }
        })
    }

    const onUnfollow = (id) => {
        // btn.current.classList.toggle('btnBefore');
        unfollowUser(id).then(response => {
            if(response.data.resultCode == 0) {
                // btn.current.classList.toggle('btnBefore');
                props.unfollow(id);
            }
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
                    <button className={s.followBtnUnf} ref={btn} onClick={() => onUnfollow(props.user.id)}>Followed</button> :
                    <button className={s.followBtnF} ref={btn} onClick={() => onFollow(props.user.id)}>Unfolowwed</button> 
                }
            </div>
        </div>
    );
}

export default User;
