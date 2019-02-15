import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SinglePost = ({post}) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
        </div>
    );
}

export class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {
                    this.props.data.map(function(post) {
                        return <SinglePost key={post.id} post={post} />;
                    })
                }                
            </div>
        )
    }
}

Posts.propTypes = {
    data: PropTypes.array.isRequired
    // userId: PropTypes.number,
    // id: PropTypes.number,
    // title: PropTypes.string,
    // body: PropTypes.string,
};

export default Posts;
