import {createContext} from 'react';
import s from './Profile.module.css';
import Preloader from '../common/Preloader/Preloader';
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
export const IsMyProfile = createContext();

const Profile = (props) => {
    if(!props.profile)  return <Preloader />;
    if(props.profile.fullName !== null) document.title = props.profile.fullName;
    if(props.profile.userId == null) return <Preloader />;
    
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
            <IsMyProfile.Provider value={isMyProfile}>
                {props.postArea ? <PostsAreaContainer/> : null}
            </IsMyProfile.Provider>
        </main>
    );
}

export default Profile;