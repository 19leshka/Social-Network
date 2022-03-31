import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileActionCreater } from "../../redux/profile-reducer";
import { useLocation } from "react-router"

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.isPostArea = false;
        this.userId = props.location;
    }
    
    componentDidMount() {
        if(this.userId == 0){
            this.props.setUserProfile(this.props.myProfile);
            this.isPostArea = true;
        }else{
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userId}`).then(response => response.data).then(response => {
                this.props.setUserProfile(response);
            });   
            this.isPostArea = false;
        }
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
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileMatch);