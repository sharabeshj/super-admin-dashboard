import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './Reducers/reducers';

const loggerMiddeware = createLogger();

const ConfigureStore = (state) => {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddeware
        )
    )
}

export default ConfigureStore;