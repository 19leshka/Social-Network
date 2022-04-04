import s from './MessageItemCompanion.module.css';

const MessageItemCompanion = (props) => {
    return(
        <div className={s.messageItemCompanion}>{props.text}</div>
        
    )
}

export default MessageItemCompanion;