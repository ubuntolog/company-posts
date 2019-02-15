import axios from 'axios';
import {apiNames} from '../constants';
import {errHandler} from '../utils';

export const fetchComments = (postId) => dispatch => {
    console.log(apiNames.posts + "/" + postId + "/comments");
    axios.get(apiNames.posts + "/" + postId + "/comments").then(response => {
        dispatch({
            type: 'COMMENTS_FETCH_SUCCESS',
            comments: response.data
        });
    }).catch(err => {
        errHandler("Could not fetch comments for the post #" + postId)(err);
    });
}