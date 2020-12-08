import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger';
// import thunkMiddleware from 'redux-thunk'
import {initReducer} from './Redux/reducer.js'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer=combineReducers({initReducer})
const store=createStore(rootReducer,applyMiddleware(logger))
ReactDOM.render(
	<BrowserRouter>
	    <Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
