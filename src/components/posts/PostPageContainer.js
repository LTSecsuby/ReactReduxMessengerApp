import {connect} from "react-redux";
import {createActionAddPost, createActionSetTextPost} from "./ReducerPostPage";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {postPage: state.postPageState.postPage};
};

let mapDispatchToProps = (dispatch) => {
    return {
        setTextOnPost: (e) => {
            let text = e.target.value;
            dispatch(createActionSetTextPost(text));
        },
        addPost: () => {
            dispatch(createActionAddPost());
        },
        asyncMethod: () => {
            setTimeout(()=>{
                dispatch(createActionSetTextPost('async'))
            }, 2000)
        }
    }
};

const PostPageContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostPageContainer;