let initialState = {
    postPage: {
        text: '',
        post: [],
        idPost: 0
    }
};


const SET_TEXT_POST = 'SET_TEXT_POST';
export let createActionSetTextPost = (text) => {
    return { type: SET_TEXT_POST, text: text }
};

const ADD_POST = 'ADD_POST';
export let createActionAddPost = () => {
    return { type: ADD_POST }
};

let ReducerPostPage = (state=initialState, action) => {

    switch (action.type) {
        case SET_TEXT_POST:
            return {...state, postPage: {...state.postPage, text: action.text}};

        case ADD_POST:
            let newId = state.postPage.idPost + 1;
            let post = { id: newId, msg: state.postPage.text };
            return {...state, postPage: {...state.postPage, text: '', post: [...state.postPage.post, post]}};

        default:
            return state;
    }
};
export default ReducerPostPage;