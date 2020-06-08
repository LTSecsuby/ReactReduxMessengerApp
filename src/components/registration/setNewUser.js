import axios from "axios";
import {createActionAddNewUser, createActionUserError} from "./ReducerRegistrationPage";

export const setNewUser = (registrationPage) => {
       return dispatch => {

            function _setNewUser() {
                const url = `http://localhost:8000/user/signup`;

                let userBody = {
                    login: registrationPage.textLogin,
                    name: {
                        firstName: registrationPage.textName,
                        lastName: registrationPage.textLastName
                    },
                    password: registrationPage.textPass
                };

                axios.post(url, userBody)
                    .then((res) => {
                        dispatch(createActionAddNewUser(res.data.login));
                    })
                    .catch(err => {
                        dispatch(createActionUserError(err.response.data));
                    });
            }

            _setNewUser();
        }
};