import React from 'react';
import s from './MessageItem.module.css'
import {NavLink} from "react-router-dom";


const DialogsMessage = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }


    return (
        <div>
            <div className={s.dialog}>
                {props.message}
            </div>
        </div>
    )
}


export default DialogsMessage