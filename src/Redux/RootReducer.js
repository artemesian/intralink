import { combineReducers } from "redux";
import { bottomnavReducer } from './bottomnav/bottomnav-reducer';
//For Enabling Caching using Redux-Persist

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	whitelist: [''],
// }
// export default persistReducer(persistConfig, rootReducer);

const rootReducer = combineReducers({
	bottomnav: bottomnavReducer,
})

export default rootReducer