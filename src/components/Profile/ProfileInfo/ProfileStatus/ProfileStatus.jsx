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
            {!editMode && <div onClick={() => setEditMode(true)} className={s.profileStatus}>
                <span>{props.status}</span>
            </div>}
            {editMode && <div className={s.editProfileStatus}>
                <input ref={status} onChange={() => props.setMyStatus(status.current.value)} autoFocus={true} onBlur={() => onInputBlur()} type="text" value={props.status} />
            </div>}
        </>
    )
}

export default ProfileStatus;