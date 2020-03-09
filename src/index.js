import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <MainRoutes />
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
