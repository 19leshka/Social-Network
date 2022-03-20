import s from './Friends.module.css';
import Friend from './Friend/Friend'

const Friends = (props) => {
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
