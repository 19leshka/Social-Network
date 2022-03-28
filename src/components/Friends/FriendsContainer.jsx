import React from 'react';
import Friends from './Friends';
import * as axios from 'axios';
import { followActionCreater } from "../../redux/friends-reducer";
import { unfollowActionCreater } from "../../redux/friends-reducer";
import { setUsersActionCreater } from "../../redux/users-reducer";
import { toggleIsFetchingActionCreater } from "../../redux/users-reducer";
import { setCurrentPageActionCreater } from "../../redux/users-reducer";
import { connect } from 'react-redux';

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Friends';
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=5&page=1").then(response => response.data.items).then(response => {
            this.props.setUsers(response);
            this.props.setIsFetching(false);
        });
    }

    setPage = (event) => {
        this.props.setIsFetching(true)
        let page = +event.target.textContent;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${page}`).then(response => response.data.items).then(response => {
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
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        users: state.users,
        pageCount:  Math.ceil(state.users.totalUsersCount / state.users.pageSize),
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
