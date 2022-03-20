import s from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Chat from './Chat/Chat';

const Messages = (props) => {
    let dialogs = 
            [...props.peoples]
            .map(dialog => {
                return <DialogItem imgSrc={window.location.origin + dialog.img} name={dialog.name} id={dialog.id}/>
            })
            
    return (
        <main className={s.messages}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
                <Chat dialogMessages={props.peoples[1].messages} newMessageText={props.peoples[1].newMessageText} sendMessage={props.sendMessage} updateMessageText={props.updateMessageText}/>
        </main>
    );
}

export default Messages;
