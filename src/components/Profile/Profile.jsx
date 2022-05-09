import s from './Profile.module.css';
import Preloader from './../common/Preloader';
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    if(props.profile.fullName !== null) document.title = props.profile.fullName;

    const isMyProfile = (props.location == props.userId ? true : false);

    return (
        <main className={s.profile}>
            <ProfileInfo 
                profile={props.profile} 
                myStatus={props.myStatus} 
                setMyStatus={props.setMyStatus}
                isMyProfile={isMyProfile}
                savePhoto={props.savePhoto}
                saveFullInfo={props.saveFullInfo}
            />
            {/* {props.postArea ? <div>asddddddddddddddddddddddddddddddddddd</div> : null} */}
            {props.postArea ? <PostsAreaContainer/> : null}
        </main>
    );
}

export default Profile;