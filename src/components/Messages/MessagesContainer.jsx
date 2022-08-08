import Messages from './Messages';
import {sendMessageActionCreator} from '../../redux/reducers/peoples-reducer';
import {updateNewMessageTextActionCreator} from '../../redux/reducers/peoples-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../hoc/withAuthRedirect';

const AuthRedirectToLogin = withAuthRedirect(Messages);

const mapStateToProps = (state) => {
    return {
        peoples: state.peoples
    }
}

const mapDispatchToProps = (dispatch) => {
    document.title = "Messages"

    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectToLogin);

export default MessagesContainer;
