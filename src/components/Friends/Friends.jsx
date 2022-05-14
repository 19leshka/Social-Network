import s from './Friends.module.css';
import Friend from './Friend/Friend';
import User from './Users/User';
import Preloader from './../common/Preloader';
import Paginator from './../common/Paginator/Paginator';

const Friends = (props) => {
    const friends = () => {
        return ([...props.friends]
        .map(friend => {
            return <Friend 
                key={friend.id} 
                isFollowing={props.isFollowing}
                follow={props.followUser} 
                unfollow={props.unfollowUser} 
                friend={friend}/>
        }))
    } 

    const users = () => {
        return ([...props.users])
        .map(user => {
            return <User
                key={user.id}
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
                <div className={s.pages}>
                    {<Paginator
                        totalItemsCount={props.totalFriendsCount} 
                        pageSize={props.pageSize}
                        currentPage={props.currentFriendsPage} 
                        setPage={props.setFriendsPage}
                        portionSize={15}
                        />}
                </div>
            </div>{props.isFetchingFriends ?   
                (<Preloader/>) : (friends())
            }
            <div className={s.usersInfo}>
                <h3>Find Friends:</h3>
                <div className={s.pages}>
                    {<Paginator
                        totalItemsCount={props.totalUsersCount} 
                        pageSize={props.pageSize}
                        currentPage={props.currentUsersPage} 
                        setPage={props.setUsersPage}
                        portionSize={15}
                        />}
                </div>
            </div>
            {props.isFetchingUsers ?   
                (<Preloader/>) : (users())
            }
        </main>
    )
}

export default Friends;
