import Messages from './Messages';
import {sendMessageActionCreator} from '../../redux/peoples-reducer';
import {updateNewMessageTextActionCreator} from '../../redux/peoples-reducer';
import {connect} from 'react-redux';


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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
