"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _RootReducer = _interopRequireDefault(require("./RootReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
var logger = (0, _reduxLogger.createLogger)(); // const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, RootReducer)

var store = (0, _redux.createStore)(_RootReducer.default, (0, _redux.applyMiddleware)(logger)); // const persistor = persistStore(store)

exports.store = store;