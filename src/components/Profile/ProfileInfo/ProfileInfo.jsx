import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
            <div className={s.profileInner}>
                <div className={s.profilePhoto}>
                    <img className={s.profileImg} src={window.location.origin + '/img/profileImg.png' } alt="" />
                    <div className={s.editPhoto}>Edit</div>
                </div>
                <div className={s.profileInfo}>
                    <h1 className={s.profileName}>Alexey Balakhanov</h1>
                    <div className={s.profileStatus}>Set status</div>
                    <hr className={s.profileHr}/>
                    <div className={s.info}>
                        <div className={s.birthDate}>
                            <div className={`${s.birthday} ${s.leftInfo}`}>Birthday:</div>
                            <div className={`${s.date} ${s.rightInfo}`}>19.02.2003</div>
                        </div>
                        <div className={s.cityLocation}>
                            <div className={`${s.city} ${s.leftInfo}`}>City:</div>
                            <div className={`${s.location} ${s.rightInfo}`}>Minsk</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProfileInfo;