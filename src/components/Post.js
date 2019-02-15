import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/commentsActions';

export class Post extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    componentDidMount() {    
        // fetchComments(this.props.data.id);
    }

    render() {  
        console.log(this.props.data);      
        return(
            <div className="post">
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.body}</p>
                <hr />
            </div>            
        )
    }
}

Post.propTypes = {
    data: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    // userId: PropTypes.number,
    // id: PropTypes.number,
    // title: PropTypes.string,
    // body: PropTypes.string,
};

export default Post;