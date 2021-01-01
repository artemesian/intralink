import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import { createLogger } from "redux-logger"
import RootReducer from './RootReducer.js';

const logger = createLogger()
// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(RootReducer, applyMiddleware(logger))
// const persistor = persistStore(store)
export { store, /*persistor*/ }