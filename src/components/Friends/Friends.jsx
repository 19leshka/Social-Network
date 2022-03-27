import s from './Friends.module.css';
import Friend from './Friend/Friend'
import User from './Users/User'
import * as axios from 'axios';

const Friends = (props) => {
    // if(props.friends === 0){ 
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         debugger;
    //     });
    // }

    let friends = 
            [...props.friends]
            .map(friend => {
                return <Friend follow={props.follow} unfollow={props.unfollow} friend={friend}/>
            })
            
    return (
        <main className={s.friends}>
            {friends}
        </main>
    );
}

export default Friends;
