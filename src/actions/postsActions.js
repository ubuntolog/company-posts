import axios from 'axios';
import {apiNames} from '../constants';
import {errHandler} from '../utils';

export const fetchPosts = () => dispatch => {
    axios.get(apiNames.posts).then(response => {
        dispatch({
            type: 'POSTS_FETCH_SUCCESS',
            posts: response.data
        });
    }).catch(err => {
        errHandler("Could not fetch posts")(err);
    });
}