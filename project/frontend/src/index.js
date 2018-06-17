import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadState,storeState } from './localstorage';
import ConfigureStore from './Store/ConfigureStore';

const state = loadState();

const store = ConfigureStore(state);

store.subscribe(() => {
    storeState({
        log : store.getState().log
    });
})

ReactDOM.render(<Provider store = { store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
