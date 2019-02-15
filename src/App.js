import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { fetchPosts } from './actions/postsActions';
import { Posts } from './components/Posts'

import Alert from 'react-s-alert';
require('react-s-alert/dist/s-alert-default.css');
require('react-s-alert/dist/s-alert-css-effects/slide.css');

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  fetchPosts: () => dispatch(fetchPosts())
})

/* 
 * mapStateToProps
*/
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
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  fetchPostsAction = (event) => {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    const posts = (this.props.postsReducer.posts ? this.props.postsReducer.posts : []);
    console.log(posts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.fetchPostsAction}>Test redux fetch action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Posts data={posts} />
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
