import React from 'react';
import DefaultUserLogo from './default-user.png';
import style from './User.module.css';

const User = (props) => {

        return(
            <p>
                <span onClick={() => {props.onChooseUser(props.chooseUserId, props.userId)}}> {props.userName}</span>
            </p>
        )

};

export default User;