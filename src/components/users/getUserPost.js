import axios from "axios";
import {createActionUserPosts} from "./ReducerUserPage";

export const getUsersPosts = (chooseUserId, userId) => dispatch => {

    function _getUsersPosts() {
        const url2 = `http://localhost:8000/api/users/user/${userId}/posts/${chooseUserId}`;
        const url1 = `http://localhost:8000/api/users/user/${chooseUserId}/posts/${userId}`;
        axios.get(url1)
            .then((res) => {
                let userPost = res.data;
                axios.get(url2)
                    .then((res) => {
                        dispatch(createActionUserPosts(chooseUserId, userPost, res.data));
                    });
            });
    }
    _getUsersPosts();
};