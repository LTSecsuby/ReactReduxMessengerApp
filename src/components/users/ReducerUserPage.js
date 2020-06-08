
let initialState = {
    usersPage: {
        users: [],
        currentUser: '',
        currentUserPosts: [],
        postTextArea: '',
        userPostsLoading: false,
        myId: "5dc972046b5fa125887910ea",
        userPosts: []
    }
};

const SET_USERS = 'SET_USERS';
export let createActionSetUsers = (users) => {
    return { type: SET_USERS, users: users }
};

const USER_POSTS = 'USER_POSTS';
export let createActionUserPosts = (currentUser, userPost, posts) => {
    return { type: USER_POSTS, currentUser: currentUser, userPost: userPost, posts: posts }
};

const SET_TEXT_POST = 'SET_TEXT_POST';
export let createActionSetTextPost = (text) => {
    return { type: SET_TEXT_POST, text: text }
};

const SET_USER_POST = 'SET_USER_POST';
export let createActionSetUserPost = () => {
    return { type: SET_USER_POST }
};

const ADD_POST = 'ADD_POST';
export let createActionAddPost = (post) => {
    return { type: ADD_POST, post: post }
};

const ReducerUserPage = (state=initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, usersPage: {...state.usersPage, users: action.users}};
        case USER_POSTS:
            return {...state, usersPage: {...state.usersPage, currentUser: action.currentUser, userPosts: action.userPost, currentUserPosts: action.posts}};
        case SET_TEXT_POST:
            return {...state, usersPage: {...state.usersPage, postTextArea: action.text}};
        case SET_USER_POST:
            return {...state, usersPage: {...state.usersPage, userPostsLoading: true}};
        case ADD_POST:
            return {...state, usersPage: {...state.usersPage, postTextArea: '', userPostsLoading: false, currentUserPosts: [...state.usersPage.currentUserPosts, action.post]}};
        default:
            return state;
    }
};

export default ReducerUserPage;