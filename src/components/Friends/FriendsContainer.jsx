import Friends from './Friends';
import { followActionCreater } from "../../redux/friends-reducer";
import { unfollowActionCreater } from "../../redux/friends-reducer";
import { setUsersActionCreater } from "../../redux/users-reducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        users: state.users 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreater(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreater(id));
        },
        setUsers: (usersData) => {
            dispatch(setUsersActionCreater(usersData))
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;