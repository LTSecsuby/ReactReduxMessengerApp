import React from 'react';
import User from "./User";
import style from './Users.module.css';

const Users = (props) => {

    let users = props.usersPage.users.map((item) => {
        if (item._id !== props.usersPage.myId) {
            return <User key={item._id} userName={item.name.firstName}
                         chooseUserId={item._id}
                         userId={props.usersPage.myId}
                         onChooseUser={props.onChooseUser}/>
        }
    });

    let otherPosts = props.usersPage.currentUserPosts
        .map(u => <div key={u._id}><p>{u.text}</p><p>{u.created}</p></div>);

    let usersPosts = props.usersPage.userPosts
        .map(u => <div key={u._id}><p>{u.text}</p><p>{u.created}</p></div>);

    return (
        <div className={style.blockContent}>
            <div className={style.userBar}>
                {users}
            </div>
            <div className={style.userContent}>
                {props.usersPage.myId}
                {otherPosts}
            </div>
            <div className={style.otherContent}>
                {props.usersPage.currentUser}
                {usersPosts}
            </div>
            <div className={style.userPostInput}>
                <textarea value={props.usersPage.postTextArea} rows="10" cols="45" onChange={props.setTextOnPost}/>
                <p>{props.usersPage.userPostsLoading ? <button disabled="disabled">ADD POST</button> : <button onClick={props.addPostUser}>ADD POST</button>}</p>
            </div>
        </div>
    )
};

export default Users;