import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfileActionCreator} from '../../redux/profile-reducer';
import {useLocation} from 'react-router';
import {getUserProfileThunkCreator} from './../../redux/profile-reducer';
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userId = props.location;
    }
    
    componentDidMount() {
        this.props.getUserProfile(this.userId)
    }
    
    render() {
        return (
            <Profile profile={this.props.profile} postArea={this.props.isPostArea}/>
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
        profile: state.myProfile.profile,
        myProfile: state.myProfile.myProfile,
        isPostArea: state.myProfile.isPostArea
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreator(profile))
        },
        getUserProfile: (id) => {
            dispatch(getUserProfileThunkCreator(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);