import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import Raven from 'raven-js';
import createRavenMiddleware from 'raven-for-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const middleware = [thunk, promiseMiddleware(), createRavenMiddleware(Raven)];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

Raven.config('https://8e8c4126753c4874a1c8b8dd4f33e72c@sentry.io/1289268').install();

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//registerServiceWorker();
