import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend'
import User from './Users/User'
import * as axios from 'axios';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.usersData = [];
    }

    friends = () => {
        return ([...this.props.friends]
        .map(friend => {
            return <Friend follow={this.props.follow} unfollow={this.props.unfollow} friend={friend}/>
        }))
    } 

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=5&page=1").then(response => response.data.items).then(response => {this.props.setUsers(response)});
    }

    users = () => {
        return ([...this.props.users])
        .map(user => {
            return <User follow={this.props.follow} unfollow={this.props.unfollow} user={user}/>
        })
    }

    render() {
        return (<main className={s.friends}>
            <div className={s.friendsInfo}><h3>Your Friends</h3></div>
            {this.friends()}
            <div className={s.usersInfo}><h3>Find Friends</h3></div>
            {this.users()}
        </main>)
    }
}

export default Friends;
