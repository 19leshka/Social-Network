import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfileActionCreator} from '../../redux/profile-reducer';
import {deletePostActionCreater} from '../../redux/profile-reducer';
import {setMyProfileStatusActionCreator} from '../../redux/profile-reducer';
import {setCurrentPageIdActionCreator} from '../../redux/profile-reducer';
import {useLocation} from 'react-router';
import {getUserProfileThunkCreator} from './../../redux/profile-reducer';
import {getProfileStatusThunkCreator} from './../../redux/profile-reducer';
import {savePhotoThunkCreator} from './../../redux/profile-reducer';
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import {saveFullInfoThunkCreator} from './../../redux/profile-reducer';
import {setIsPostAreaActionCreator} from './../../redux/profile-reducer';
import { compose } from 'redux';
/* selectors */
import {getProfile, getIsPostArea, getMyStatus, getLocation} from './../../redux/selectors/profile-selector';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    refreshProfile() {
        if(this.props.location == this.props.userId) {
            this.props.getUserStatus(this.props.userId);
            this.props.getUserProfile(this.props.userId, this.props.userId);
        }else{
            this.props.getUserProfile(this.props.location, this.props.userId);
        }
    }
    
    componentDidMount() {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.location != prevProps.location) {
            this.refreshProfile();
        }
    }
    
    render() {
        return (
            <Profile 
                profile={this.props.profile} 
                myStatus={this.props.myStatus} 
                setMyStatus={this.props.setMyStatus} 
                postArea={this.props.isPostArea}
                location={this.props.location}
                userId={this.props.userId}
                savePhoto={this.props.savePhoto}
                saveFullInfo={this.props.saveFullInfo}
                setPostArea={this.props.setPostArea}
            />  
        )
    }
}

const ProfileMatch = (props) => {
    let location = useLocation().pathname.split("file/")[1];

	return (
		<AuthRedirectToLogin {...props} location={location} />
	)
}

const AuthRedirectToLogin = compose(withAuthRedirect)(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isPostArea: getIsPostArea(state),
        myStatus: getMyStatus(state),
        location: getLocation(state),
        userId: state.auth.userId
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        },
        getUserProfile: (id, currentId) => {
            dispatch(getUserProfileThunkCreator(id, currentId))
        },
        getUserStatus: (id) => {
            dispatch(getProfileStatusThunkCreator(id))
        },
        setMyStatus: (value) => {
            dispatch(setMyProfileStatusActionCreator(value))
        },
        setLocation: (value) => {
            dispatch(setCurrentPageIdActionCreator(value))
        },
        deletePost: (id) => {
            dispatch(deletePostActionCreater(id));
        },
        savePhoto: (photo) => {
            dispatch(savePhotoThunkCreator(photo));
        },
        saveFullInfo: (fullInfo) => {
            dispatch(saveFullInfoThunkCreator(fullInfo));
        },
        setPostArea: (value) => {
            dispatch(setIsPostAreaActionCreator(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);