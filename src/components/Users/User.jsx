import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/png-transparent-computer-icons-user-user-icon-thumbnail.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
            <div>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="imgUser"
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>
                        Unfollow</button>

                    : <button disabled={followingInProgress}
                              onClick={() => {
                                  follow(user.id)
                              }}>
                        Follow</button>}
            </div>
            </span>
            <span>
            <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
            </span>
            <span>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
            </span>
            </span>
        </div>
    )

}

export default User