import React from 'react';
import Friends from './Friends';
import {followActionCreator} from '../../redux/friends-reducer';
import {unfollowActionCreator} from '../../redux/friends-reducer';
import {toggleIsFollowingProgressActionCreator} from '../../redux/users-reducer';
import {getUsersThunkCreator} from '../../redux/users-reducer';
import {getFollowUserThunkCreator} from '../../redux/users-reducer';
import {getUnfollowUserThunkCreator} from '../../redux/users-reducer';
import {setCurrentPageActionCreator} from '../../redux/users-reducer';
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
    }

    setPage = (event) => {
        let page = +event.target.textContent;
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (<Friends
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
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        users: state.users,
        totalUsersCount: state.users.totalUsersCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowing: state.users.followingInProgress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id));
        },
        setIsFollowing: (value, id) => {
            dispatch(toggleIsFollowingProgressActionCreator(value, id))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page))
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(FriendsContainer);