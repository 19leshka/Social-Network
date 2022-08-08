import React from 'react';
import Friends from './Friends';
import {toggleIsFollowingProgressActionCreator} from '../../redux/reducers/users-reducer';
import {getUsersThunkCreator} from '../../redux/reducers/users-reducer';
import {getFriendsThunkCreator} from '../../redux/reducers/users-reducer';
import {getFollowUserThunkCreator} from '../../redux/reducers/users-reducer';
import {getUnfollowUserThunkCreator} from '../../redux/reducers/users-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../hoc/withAuthRedirect';
import { compose } from 'redux';

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Friends';
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    setUsersPage = (event) => {
        let usersPage = +event.target.textContent;
        this.props.getUsers(usersPage, this.props.pageSize);
    }

    setFriendsPage = (event) => {
        let friendsPage = +event.target.textContent;
        this.props.getFriends(friendsPage, this.props.pageSize);
    }

    render() {
        return (<Friends
            currentUsersPage={this.props.currentUsersPage}
            currentFriendsPage={this.props.currentFriendsPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            friends={this.props.friends}
            users={this.props.users}
            setUsersPage={this.setUsersPage}
            setFriendsPage={this.setFriendsPage}
            isFetchingUsers={this.props.isFetchingUsers}
            isFetchingFriends={this.props.isFetchingFriends}
            isFollowing={this.props.isFollowing}
            setIsFollowing={this.props.setIsFollowing}
            totalUsersCount={this.props.totalUsersCount}
            totalFriendsCount={this.props.totalFriendsCount}
            pageSize={this.props.pageSize}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.users.friends,
        users: state.users.users,
        totalUsersCount: state.users.totalUsersCount,
        totalFriendsCount: state.users.totalFriendsCount,
        pageSize: state.users.pageSize,
        currentUsersPage: state.users.currentUsersPage,
        currentFriendsPage: state.users.currentFriendsPage,
        isFetchingUsers: state.users.isFetchingUsers,
        isFetchingFriends: state.users.isFetchingFriends,
        isFollowing: state.users.followingInProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsFollowing: (value, id) => {
            dispatch(toggleIsFollowingProgressActionCreator(value, id))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        getFriends: (currentPage, pageSize) => {
            dispatch(getFriendsThunkCreator(currentPage, pageSize))
        },
        followUser: (id) => {
            dispatch(getFollowUserThunkCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(getUnfollowUserThunkCreator(id))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(FriendsContainer);