import React from 'react';
import Friends from './Friends';
import { followActionCreater } from "../../redux/friends-reducer";
import { unfollowActionCreater } from "../../redux/friends-reducer";
import { toggleIsFollowingProgressActionCreater } from "../../redux/users-reducer";
import { getUsersThunkCreator } from "../../redux/users-reducer";
import { getFollowUserThunkCreator } from "../../redux/users-reducer";
import { getUnfollowUserThunkCreator } from "../../redux/users-reducer";
import { connect } from 'react-redux';

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Friends';
    }

    componentDidMount() {
        this.props.getUsers();
    }

    setPage = (event) => {
        let page = +event.target.textContent;
        this.props.getUsers(page);
    }

    render() {
        return (<Friends 
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            friends={this.props.friends}
            users={this.props.users.users}
            setPage={this.setPage}
            isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
            setIsFollowing={this.props.setIsFollowing}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        users: state.users,
        pageCount:  Math.ceil(state.users.totalUsersCount / state.users.pageSize),
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowing: state.users.followingInProgress
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
        setIsFollowing: (value, id) => {
            dispatch(toggleIsFollowingProgressActionCreater(value, id))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        followUser: (id) => {
            dispatch(getFollowUserThunkCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(getUnfollowUserThunkCreator(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
