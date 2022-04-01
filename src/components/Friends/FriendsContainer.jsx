import React from 'react';
import Friends from './Friends';
import * as axios from 'axios';
import { followActionCreater } from "../../redux/friends-reducer";
import { unfollowActionCreater } from "../../redux/friends-reducer";
import { setUsersActionCreater } from "../../redux/users-reducer";
import { toggleIsFetchingActionCreater } from "../../redux/users-reducer";
import { setCurrentPageActionCreater } from "../../redux/users-reducer";
import { toggleIsFollowingProgressActionCreater } from "../../redux/users-reducer";
import { connect } from 'react-redux';
import {getUsersPage} from "./../../api/api"

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Friends';
    }

    componentDidMount() {
        getUsersPage(1).then(response => {
            this.props.setUsers(response);
            this.props.setIsFetching(false);
        });
    }

    setPage = (event) => {
        this.props.setIsFetching(true)
        let page = +event.target.textContent;
        getUsersPage(page).then(response => {
            this.props.setPage(page);
            this.props.setUsers(response);
            this.props.setIsFetching(false)
        });
    }

    render() {
        return (<Friends 
            pageCount={this.props.pageCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
        setUsers: (usersData) => {
            dispatch(setUsersActionCreater(usersData))
        },
        setPage: (page) => {
            dispatch(setCurrentPageActionCreater(page))
        },
        setIsFetching: (value) => {
            dispatch(toggleIsFetchingActionCreater(value))
        },
        setIsFollowing: (value, id) => {
            dispatch(toggleIsFollowingProgressActionCreater(value, id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
