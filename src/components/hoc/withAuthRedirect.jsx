import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
} 

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(!props.isAuth) return <Navigate to='/login'/>
        return (<Component {...props}/>)
    }

    const ConnectedAuthRedirectToLogin = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectToLogin;
}