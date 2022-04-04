import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { setUserProfileActionCreater } from "../../redux/profile-reducer";
import { useLocation } from "react-router"
import {getUserProfileThunkCreator} from './../../redux/profile-reducer'

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.isPostArea = false;
        this.userId = props.location;
    }
    
    componentDidMount() {
        this.props.getUserProfile(this.userId)
    }
    
    render() {
        return (
            <Profile profile={this.props.profile} postArea={this.isPostArea}/>
        )    
    }
}

const ProfileMatch = (props) => {
    let location = useLocation().pathname.split("file/")[1];
	return (
		<ProfileContainer {...props} location={location} />
	)
}

const mapStateToProps = (state) => {
    return {
        profile: state.myProfile.profile,
        myProfile: state.myProfile.myProfile
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileActionCreater(profile))
        },
        getUserProfile: (id) => {
            debugger
            dispatch(getUserProfileThunkCreator(id))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);