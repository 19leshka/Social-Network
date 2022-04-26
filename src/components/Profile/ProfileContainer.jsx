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
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import { compose } from 'redux';
/* selectors */
import {getProfile,  getMyProfile, getIsPostArea, getMyStatus, getLocation} from './../../redux/selectors/profile-selector';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    refreshProfile() {
        if(this.props.location == 0) this.props.getUserStatus(22932);
        this.props.getUserProfile(this.props.location);
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
            <Profile profile={this.props.profile} myStatus={this.props.myStatus} setMyStatus={this.props.setMyStatus} postArea={this.props.isPostArea}/>  
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
        myProfile: getMyProfile(state),
        isPostArea: getIsPostArea(state),
        myStatus: getMyStatus(state),
        location: getLocation(state)
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        },
        getUserProfile: (id) => {
            dispatch(getUserProfileThunkCreator(id))
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);