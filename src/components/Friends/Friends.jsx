import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend'
import User from './Users/User'
import * as axios from 'axios';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        document.title = 'Friends';
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
        return ([...this.props.users.users])
        .map(user => {
            return <User follow={this.props.follow} unfollow={this.props.unfollow} user={user}/>
        })
    }

    setPage = (event) => {
        let page = +event.target.textContent;
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=5&page=${page}`).then(response => response.data.items).then(response => {
            this.props.setPage(page);
            this.props.setUsers(response);
        });
    }

    pages = (num) => {
        let pages = [];
        for(let i = 1; i <= num; i++){
            pages.push(<span onClick={(e) => this.setPage(e)} className={(i == this.props.currentPage ? s.active : s.disabled)}>{i}</span>)
        }
        return pages
    }

    render() {
        return (<main className={s.friends}>
            <div className={s.friendsInfo}>
                <h3>Your Friends:</h3>
            </div>
            {this.friends()}
            <div className={s.usersInfo}>
                <h3>Find Friends:</h3>
                <div className={s.pages}>
                    {this.pages(this.props.pageCount)}
                    <span>...</span>
                </div>
            </div>
            {this.users()}
        </main>)
    }
}

export default Friends;
