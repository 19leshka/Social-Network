import s from './logout.module.css';
import quitSvg from './../../assets/quit.svg';
import {connect} from 'react-redux';
import {logoutThunkCreator} from './../../redux/auth-reducer';
import {getAuthThunkCreator} from './../../redux/auth-reducer';
import {useNavigate} from 'react-router-dom';

const Logout = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        props.logout();
        navigate('/login');
    }

    console.log(quitSvg);

    return (
        <>
            <div className={s.logoutContainer}>
                <svg className={s.quitImg} xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.996h-1v3.998z"/></svg>
                <h3>Oh no! You're leaving...</h3>
                <h3>Are you sure?</h3>
                <button className={s.logoutButton} onClick={() => logout()}>Logout</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutThunkCreator());
        },
        getAuth: () => {
            dispatch(getAuthThunkCreator());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);