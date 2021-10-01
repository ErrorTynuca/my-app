import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/formControls";


let maxLength20 = maxLengthCreator(20)

const AddNewPostForm = (props) => {

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="newPostText"
                               component={Textarea}
                               validate={(maxLength20, required)}
                               placeholder={"Post message"}
                        />
                    </div>
                    <div>
                        <button type="submit" name={"btnAddPost"}>Send</button>
                    </div>
                </form>
            )}
        />
    )
}

const MyPosts = React.memo(props => {
    let PostDataNew = props.PostData.map(
        (element) => {
            return (
                <Post message={element.message} value={element.value}/>
            )
        }
    );

    let newPostElement = React.createRef();


    let onAddPost = (values) => {
        console.log(values)
        props.addPost(values.newPostText);
    }


    return (
        <div>
            <div>
                <h3>My posts</h3>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {PostDataNew}
            </div>
        </div>
    )
})


export default MyPosts