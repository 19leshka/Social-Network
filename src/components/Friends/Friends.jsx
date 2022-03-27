import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend'
import User from './Users/User'
import * as axios from 'axios';

class Friends extends React.Component {
    constructor(props) {
        super(props);
    }
    // if(props.friends === 0){ 
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         debugger;
    //     });
    // }

    friends = () => {
        return ([...this.props.friends]
        .map(friend => {
            return <Friend follow={this.props.follow} unfollow={this.props.unfollow} friend={friend}/>
        }))
    } 

    render() {
        return (<main className={s.friends}>
            {this.friends()}
        </main>)
    }
}

export default Friends;
