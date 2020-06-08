import {connect} from "react-redux";
import React from 'react';
import {
    createActionAddPost,
    createActionSetTextPost,
    createActionSetUserPost,
    createActionSetUsers
} from "./ReducerUserPage";
import axios from "axios";
import Users from "./Users";
import {getUsersPosts} from "./getUserPost";

export class UserContainer extends React.Component{

    componentDidMount() {
        //const url = `https://social-network.samuraijs.com/api/1.0/users`;
        const url = "http://localhost:8000/api/users";

        axios.get(url)
            .then((res) => {
                this.props.setUsers(res.data);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.usersPage.userPostsLoading){

            let post = { body: this.props.usersPage.postTextArea, date: Date.now() };

            let userBody = {
                "posts": [...this.props.usersPage.currentUserPosts, post]
            };

            const url = `http://localhost:8000/api/users/${this.props.usersPage.currentUser}/post`;

            axios.put(url, userBody)
                .then(() => {
                    this.props.setUserPost(post);
                });
        }
    }

    render() {

        return(
            <>
                <Users usersPage={this.props.usersPage} onChooseUser={this.props.onChooseUser} setTextOnPost={this.props.setTextOnPost} addPostUser={this.props.addPostUser}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {usersPage: state.userPageState.usersPage}
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(createActionSetUsers(users))
        },
        onChooseUser: (chooseUserId, userId) => {
            dispatch(getUsersPosts(chooseUserId, userId));
        },
        setTextOnPost: (e) => {
            let text = e.target.value;
            dispatch(createActionSetTextPost(text));
        },
        setUserPost: (posts) => {
            dispatch(createActionAddPost(posts));
        },
        addPostUser: () => {
            dispatch(createActionSetUserPost());
            //dispatch(setUsersPosts(this.props.usersPage.currentUser, posts));
        }
    }
};

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UserPageContainer;