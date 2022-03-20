import Friends from './Friends';
import { followActionCreater } from "../../redux/friends-reducer";
import { unfollowActionCreater } from "../../redux/friends-reducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        friends: state.friends 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreater(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreater(id));
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;