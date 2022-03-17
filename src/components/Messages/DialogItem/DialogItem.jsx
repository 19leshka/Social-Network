import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={s.dialogItem}>    
                    <div className={s.dialogItemIcon}>
                        <img className={s.dialogIcon} src={props.imgSrc} alt="" />
                    </div>
                    <p>{props.name}</p>
        </NavLink>
    );
}

export default DialogItem;