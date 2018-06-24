import * as ActionTypes from '../Actions/Actions';

const LoginHandler = ( state = { authenticated : false }, action ) => {
    switch(action.type){
        case ActionTypes.LOGIN:
            return {
                ...state,
                authenticated : true,
                token : action.token,
                user_id : action.user_id
            }
        case ActionTypes.ERROR:
            return {
                ...state,
                authenticated : false,
            }
        case ActionTypes.LOGOUT:
            return {
                ...state,
                authenticated : false,
                token : null,
                user_id : null
            }
        default : 
            return state

    }
}

export  default LoginHandler;