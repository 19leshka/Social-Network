import s from './Profile.module.css'
import PostsAreaContainer from './PostsArea/PostsAreaContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
        <main className={s.profile}>
            <ProfileInfo />
            <PostsAreaContainer myProfile={props.myProfile} dispatch={props.dispatch} />
        </main>
    );
}

export default Profile;