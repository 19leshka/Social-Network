import React  from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setUserDataActionCreator} from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
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
            dispatch(setUserDataActionCreator(id, email, login));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);