import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import inputReducer from './store/reducers/input';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers( applyMiddleware(thunk) );
const store = createStore(inputReducer, enhancer);

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

