import React  from "react";
import Header from "./Header";
import {getAuthThunkCreator} from './../../redux/auth-reducer'
import { connect } from 'react-redux';
import { setUserDataActionCreater } from "./../../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserData: (id, email, login) => {
            dispatch(setUserDataActionCreater(id, email, login));
        },
        getAuth: () => {
            dispatch(getAuthThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);