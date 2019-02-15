import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Post from '../components/Post';
import * as actions from '../actions/commentsActions';

const mapStateToProps = (state) => {
    // console.log(state);
    const postComments = (state.commentsReducer.comments ? state.commentsReducer.comments  : []);
    const allPosts = (state.postsReducer.posts ? state.postsReducer.posts : []);
    return {
        comments: postComments,
        data: allPosts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),

    };
};

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
