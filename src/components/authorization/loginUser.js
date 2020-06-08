import axios from "axios";
import {createActionLoginUser, createActionLoginUserError} from "./ReducerAuthorizationPage";

export const loginUser = (authorizationPage) => {
        return dispatch => {

            function _loginUser() {
                const url = `http://localhost:8000/user/login`;

                let body = {
                    login: authorizationPage.authTextLogin,
                    password: authorizationPage.authTextPass
                };
                axios.post(url, body)
                    .then((res) => {
                        localStorage.setItem("token", res.data.token);
                        dispatch(createActionLoginUser(res.data.user));
                    })
                    .catch((err) => {
                        if (err.response.status === 401) {
                            dispatch(createActionLoginUserError(err.response.data));
                        } else console.log(err);
                    });
            }

            _loginUser();
        }
};