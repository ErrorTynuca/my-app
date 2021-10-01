import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users,  portionSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize} portionSize={portionSize}/>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     key={u.id}/>
                )
            }
        </div>)
}

export default Users