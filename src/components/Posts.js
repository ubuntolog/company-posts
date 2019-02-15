import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SinglePost = ({post}) => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export class Posts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
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
