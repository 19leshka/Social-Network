import Messages from './Messages';
import { sendMessageActionCreater } from "../../redux/dialogs-reducer";
import { updateNewMessageTextActionCreater } from "../../redux/dialogs-reducer";

const MessagesContainer = (props) => {
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreater());
    }

    const updateMessageText = (text) => {
        let action = updateNewMessageTextActionCreater(text);
        props.dispatch(action);
    }

    return (
        <Messages dialogs={props.dialogs} sendMessage={sendMessage} updateMessageText={updateMessageText}/>
    );
}

export default MessagesContainer;
