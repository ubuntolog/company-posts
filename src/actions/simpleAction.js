import axios from 'axios';
import Alert from 'react-s-alert';

const urlRoot = "http://localhost:4000"

const apiNames = {
    posts:    `${urlRoot}/posts`,
    comments: `${urlRoot}/comments`,
    users:    `${urlRoot}/users`,
};


export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  })
}

export const errHandler = (msg) => {
  return function(err) {
      const alert = (msg) => {
          Alert.error(msg);
      };
      const response = err.response || {};
      if (response.status == 401) {
          alert("Please login");
      } else if (response.status == 403) {
          alert("Access denied. "+(response.data || ""));
      } else if (response.status == 504) {
          alert("The server does not respond (gateway timeout).");
      } else {
          msg = msg || "An error occurred while contacting the server.";
          alert(msg);
      }
  }
}

export const fetchPosts = () => dispatch => {
  axios.get(apiNames.posts).then(response => {
        dispatch({
            type: 'POSTS_FETCH_SUCCESS',
            posts: response.data
        });
      }).catch(err => {console.log(err)});
}
