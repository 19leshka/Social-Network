import s from './ProfileEdit.module.css';

const ProfileEdit = (props) => {
    const onProfilePhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.background}>
            <div onClick={() => props.setEditMode(false)} className={s.exitBtn}>X</div>
            <div className={s.editFormWrapper}>
                <div className={s.changePhoto}>
                    <div>Change Photo:</div>
                    <input type="file" onChange={onProfilePhotoSelected}/>
                </div>

            </div>
        </div>
    )
}

export default ProfileEdit;