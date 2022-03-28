import s from './Friends.module.css';
import Friend from './Friend/Friend'
import User from './Users/User'
import Preloader from './../common/Preloader'

const Friends = (props) => {
    const pages = (num) => {
        let pages = [];
        for(let i = 1; i <= num; i++){
            pages.push(<span onClick={(e) => props.setPage(e)} className={(i == props.currentPage ? s.active : s.disabled)}>{i}</span>)
        }
        return pages
    } 

    const friends = () => {
        return ([...props.friends]
        .map(friend => {
            return <Friend follow={props.follow} unfollow={props.unfollow} friend={friend}/>
        }))
    } 

    
    const users = () => {
        return ([...props.users])
        .map(user => {
            return <User follow={props.follow} unfollow={props.unfollow} user={user}/>
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
                    {pages(props.pageCount)}
                    <span>...</span>
                </div>
            </div>
            {props.isFetching ?   
                (<Preloader/>) : (users())
            }
        </main>
    )
}

export default Friends;
