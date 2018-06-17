import * as ActionTypes from './Actions';
import axios from 'axios';

const loggedIn = (data,res) => {
    return {
        type : ActionTypes.LOGIN,
        data,
        token : res.data.token,
        has_pass : true
    }
}

const error = (data,e) =>{
    return {
        type : ActionTypes.ERROR,
        data,
        e
    }
}

const validation = data => {
    return dispatch => {
        const base64encodeData = new Buffer(data.email + ':' + data.password).toString('base64');
        const headers = { 'Authorization' : 'Basic' + base64encodeData};
        return axios('/login',{ headers : headers }) .then( res => dispatch(loggedIn(data,res))) .catch(e => dispatch(error(data,e)));
    }
}

export const loginHandler = data => {
    return (dispatch,getState) => dispatch(validation(data))
}

export const logout = () =>{
    return {
        type : ActionTypes.LOGOUT
    }
}