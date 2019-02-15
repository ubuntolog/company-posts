import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './images/blog.png';
import './App.css';
import { fetchPosts } from './actions/postsActions';
// import { fetchComments} from './actions/commentsActions';
// import { Post } from './components/Post';
import { PostContainer } from './containers/PostContainer'

import Alert from 'react-s-alert';
require('react-s-alert/dist/s-alert-default.css');
require('react-s-alert/dist/s-alert-css-effects/slide.css');

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
  // fetchComments: (postId) => dispatch(fetchComments(postId))
})

const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  constructor(props) {
    super(props);
    // this.fetchComments = this.props.fetchComments.bind(this);
  }
   

  fetchPostsAction = (event) => {
    this.props.fetchPosts();
  }

  fetchPostsAction = (event) => {
    this.props.fetchPosts();
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {    
    const allPosts = (this.props.postsReducer.posts ? this.props.postsReducer.posts : []);
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The most amazing company blog</h1>
        </header>
        <div>
        <PostContainer />
          {
            allPosts.map(function(item) {
               
                // return <PostContainer key={item.id} data={item} />;
            })
          }                
        </div>

       
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
