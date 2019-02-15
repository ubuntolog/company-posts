import Alert from 'react-s-alert';
require('react-s-alert/dist/s-alert-default.css');
require('react-s-alert/dist/s-alert-css-effects/slide.css');

export const errHandler = (msg) => {    
    return err => {
        const response = err.response || {};
        if (response.status == 401) {
            Alert.error("Please login");
        } else if (response.status == 403) {
            Alert.error("Access denied. "+(response.data || ""));
        } else if (response.status == 504) {
            Alert.error("The server does not respond (gateway timeout).");
        } else {
            msg = msg || "An error occurred while contacting the server.";
            Alert.error(msg);
        }
    }
}