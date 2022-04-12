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

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userId = props.location;
        // console.log(this.props.location)
    }
    
    componentDidMount() {
        if(this.userId == 0) this.props.getUserStatus(22932);
        this.props.getUserProfile(this.userId);

        // (this.userId == 0) 
        //     ? this.props.getUserProfile(this.userId)
        //     : this.props.getUserProfile(0)
    }

    componentDidUpdate( prevProps ) {
        // debugger
        // if(prevProps.location != prevProps.profile.userId) {
        //     if(this.userId == 0) prevProps.getUserStatus(22932);
        //     prevProps.getUserProfile(prevProps.location);
        // }
        let a = this.props;
        // console.log("update " + this.props.location)
        // this.props.getUserProfile(this.props.location)
    }
    
    render() {
        return (
            <Profile profile={this.props.profile} myStatus={this.props.myStatus} setMyStatus={this.props.setMyStatus} postArea={this.props.isPostArea}/>
        )    
    }
}

const ProfileMatch = (props) => {
    let location = useLocation().pathname.split("file/")[1];
    // debugger
    // if(props.location != location) props.setLocation(location);

	return (
		<AuthRedirectToLogin {...props} location={location} />
	)
}

const AuthRedirectToLogin = compose(withAuthRedirect)(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.myProfile.profile,
        myProfile: state.myProfile.myProfile,
        isPostArea: state.myProfile.isPostArea,
        myStatus: state.myProfile.myStatus,
        location: state.myProfile.currentPageId
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