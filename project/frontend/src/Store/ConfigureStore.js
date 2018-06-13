import { createStore, applyMiddleware } from 'react-redux';
import {thunkMiddleware} from 'redux-thunk';
import { createStore } from 'redux-logger';

import rootReducer from './Reducers/reducers';

const loggerMiddeware = createLogger();

const configureStore = (state) => {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddeware
        )
    )
}

export default configureStore;