import Messages from './Messages';
import { sendMessageActionCreater } from "../../redux/peoples-reducer";
import { updateNewMessageTextActionCreater } from "../../redux/peoples-reducer";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        peoples: state.peoples 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreater());
        },
        updateMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreater(text));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
