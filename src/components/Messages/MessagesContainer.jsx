import Messages from './Messages';
import { sendMessageActionCreater } from "../../redux/dialogs-reducer";
import { updateNewMessageTextActionCreater } from "../../redux/dialogs-reducer";
import StoreContext from './../../StoreContext';

const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>{             
                (store) => {
                    const dialogs = store.getState().dialogs;
                    
                    const sendMessage = () => {
                        store.dispatch(sendMessageActionCreater());
                    }
                
                    const updateMessageText = (text) => {
                        let action = updateNewMessageTextActionCreater(text);
                        store.dispatch(action);
                    }
                    
                    return <Messages dialogs={dialogs} sendMessage={sendMessage} updateMessageText={updateMessageText}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MessagesContainer;
