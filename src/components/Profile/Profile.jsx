import s from './Profile.module.css';
import Preloader from './../common/Preloader';
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // console.log("load " + JSON.stringify(props.profile));

    if(!props.profile) {
        return <Preloader />
    }
    if(props.profile.fullName !== null) document.title = props.profile.fullName;
    
    return (
        <main className={s.profile}>
            <ProfileInfo profile={props.profile} myStatus={props.myStatus} setMyStatus={props.setMyStatus}/>
            {props.postArea ? <PostsAreaContainer/> : null}
        </main>
    );
}

export default Profile;