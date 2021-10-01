import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU'/>
            {props.message}
            <div >
                <span>Like {props.value} </span>
            </div>
        </div>
    )
}

export default Post