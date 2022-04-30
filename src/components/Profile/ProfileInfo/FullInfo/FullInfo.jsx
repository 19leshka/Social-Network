import s from './FullInfo.module.css';

const FullInfo = (props) => {
    return (
        <div className={s.fullInfo}>
            <div className={s.lookingFor}>
                <h3>FullInfo</h3>
                <div className={s.lookingForAJob}>
                    <span>Looking for a job:</span>
                    <span>Yes</span>
                </div>
                <div className={s.lookingForAJobDescription}>
                    <span>Looking for a job description:</span>
                    <span>Smth</span>
                </div>
            </div>
            <div className={s.contacts}>
                <h3>Constants</h3>
                <div className={s.github}>
                    <span>Github:</span>
                    <span>Yes</span>
                </div>
                <div className={s.vk}>
                    <span>Vk:</span>    
                    <span>Yes</span>
                </div>
                <div className={s.facebook}>
                    <span>Facebook:</span>
                    <span>Yes</span>
                </div>
                <div className={s.instagram}>
                    <span>Instagram:</span>
                    <span>Yes</span>
                </div>
                <div className={s.twitter}>
                    <span>Twitter:</span>
                    <span>Yes</span>
                </div>
                <div className={s.website}>
                    <span>Website:</span>
                    <span>Yes</span>
                </div>
                <div className={s.youtube}>
                    <span>Youtube:</span>
                    <span>Yes</span>
                </div>
                <div className={s.mainLink}>
                    <span>Main link:</span>
                    <span>Yes</span>
                </div>
            </div>
        </div>
    )
}

export default FullInfo;