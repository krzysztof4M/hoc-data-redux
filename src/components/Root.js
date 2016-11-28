import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../rootReducer';

import routes from '../routes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routes} />
            </Provider>
        );
    }
}
