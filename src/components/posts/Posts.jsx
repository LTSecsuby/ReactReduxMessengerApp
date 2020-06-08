import React from 'react';


class Posts extends React.Component {


    render() {

        let posts = this.props.postPage.post.map(m=><div key={m.id}>{m.msg}</div>);

        return (
            <div>
                {posts}
                <textarea value={this.props.postPage.text} onChange={this.props.setTextOnPost}/>
                <button onClick={this.props.addPost}>ADD POST</button>
                <button onClick={this.props.asyncMethod}>ASYNC</button>
            </div>
        )
    }
}

export default Posts;