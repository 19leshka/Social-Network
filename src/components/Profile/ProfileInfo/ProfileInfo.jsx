import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/userPhoto.png'

const ProfileInfo = (props) => {
    console.log(props)

    const src = (props.profile.photos.large !== null ? props.profile.photos.large : userPhoto);
    const status = (props.profile.status !== null ? props.profile.status : "No status");
    const birthday = (props.profile.birthday !== null ? props.profile.birthday : "xxx");
    const city = (props.profile.city !== null ? props.profile.city : "xxx");

    return (
            <div className={s.profileInner}>
                <div className={s.profilePhoto}>
                    <img className={s.profileImg} src={src} alt="" />
                    <div className={s.editPhoto}>Edit</div>
                </div>
                <div className={s.profileInfo}>
                    <h1 className={s.profileName}>{props.profile.fullName}</h1>
                    <div className={s.profileStatus}>{status}</div>
                    <hr className={s.profileHr}/>
                    <div className={s.info}>
                        <div className={s.birthDate}>
                            <div className={`${s.birthday} ${s.leftInfo}`}>Birthday:</div>
                            <div className={`${s.date} ${s.rightInfo}`}>{birthday}</div>
                        </div>
                        <div className={s.cityLocation}>
                            <div className={`${s.city} ${s.leftInfo}`}>City:</div>
                            <div className={`${s.location} ${s.rightInfo}`}>{city}</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProfileInfo;