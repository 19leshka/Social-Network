import s from './ProfileStatus.module.css';
import { profileAPI } from './../../../../api/api'
import { useState, useRef } from 'react';

const ProfileStatus = (props) => {
    let status = useRef(null);
    const [editMode, setEditMode] = useState(false);

    const onInputBlur = () => {
        setEditMode(false);
        profileAPI.updateStatus(props.status);
    }

    return (
        <>
            {!editMode && <span onClick={() => setEditMode(true)} className={s.profileStatus}>
                {props.status}
            </span>}
            {editMode && <input className={s.editProfileStatus} ref={status} onChange={() => props.setMyStatus(status.current.value)} autoFocus={true} onBlur={() => onInputBlur()} type="text" value={props.status} />}
        </>
    )
}

export default ProfileStatus;