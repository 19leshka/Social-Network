import s from './MessageItemAuthor.module.css'

const MessageItemAuthor = (props) => {
    return(
        <div className={s.messageItemAuthor}>{props.text}</div>
    )
}

export default MessageItemAuthor;