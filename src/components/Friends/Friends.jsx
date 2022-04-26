import s from './Friends.module.css';
import Friend from './Friend/Friend';
import User from './Users/User';
import Preloader from './../common/Preloader';
import Paginator from './../common/Paginator/Paginator';

const Friends = (props) => {
    const friends = () => {
        return ([...props.friends]
        .map(friend => {
            return <Friend follow={props.follow} unfollow={props.unfollow} friend={friend}/>
        }))
    } 

    
    const users = () => {
        return ([...props.users])
        .map(user => {
            return <User
                isFollowing={props.isFollowing}
                user={user}
                followUser={props.followUser}
                unfollowUser={props.unfollowUser}
                />
        })
    }

    return (
        <main className={s.friends}>
            <div className={s.friendsInfo}>
                <h3>Your Friends:</h3>
            </div>
            {friends()}
            <div className={s.usersInfo}>
                <h3>Find Friends:</h3>
                <div className={s.pages}>
                    {/* {pages(props.pageCount)} */}
                    {<Paginator num={props.pageCount} currentPage={props.currentPage} setPage={props.setPage}/>}
                </div>
            </div>
            {props.isFetching ?   
                (<Preloader/>) : (users())
            }
        </main>
    )
}

export default Friends;
