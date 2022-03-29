import s from './Profile.module.css'
import PostsAreaContainer from './PostsArea/PostsAreaContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    document.title = "MyProfile";
    
    return (
        <main className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            {props.postArea ? <PostsAreaContainer/> : null}
        </main>
    );
}

export default Profile;