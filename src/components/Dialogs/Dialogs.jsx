import React from 'react';
import s from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import DialogsMessage from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Field, Form} from "react-final-form";
import {Textarea} from "../common/FormsControls/formControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={"newMessageBody"}
                               component={Textarea}
                               validate={required}
                               placeholder={"Enter you message"}/>
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            )}
        />
    )
}


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsDataNew = state.dialogsData.map(
        (element) => {
            return <DialogItem name={element.name} key={element.id} id={element.id}/>
        }
    )

    let messageDataNew = state.messageData.map(
        (e) => {
            return <DialogsMessage message={e.message} key={e.id} id={e.id}/>

        }
    )

    let addNewMessage = (values) => {
        console.log(values)
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsDataNew}
            </div>
            <div className={s.message}>
                {messageDataNew}
                <div>
                    <AddMessageForm onSubmit={ addNewMessage } />
                </div>
            </div>
        </div>

    )
}

export default Dialogs