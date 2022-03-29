import React from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileActionCreater } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.isPostArea = false;
        this.userId = this.props.match ? this.props.match.params.userId : 0;
        // debugger
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
	let match = useMatch("/profile/:userId/");
    // debugger
	return (
		<ProfileContainer {...props} match={match} />
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