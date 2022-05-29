import s from './NotFound.module.css'

const NotFound = (props) => {
    return(
        <div className={s.notFoundPage}>
            <div>
                <b>404</b>
            </div>
            <div>
                <p>Page not found.</p>
            </div>
        </div>
    )
}

export default NotFound;