import { combineReducers } from "redux";
import { bottomnavReducer } from './bottomnav/bottomnav-reducer';
import { loadClassReducer,listclassReducer } from './class/class-reducers';
import { loadUser} from './auth/auth-reducer';
import { loadArticles} from './articles/article-reducers';
import { sendMessageReducer} from './chat/chat-reducer';
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
	Classe:loadClassReducer,
	Classes:listclassReducer,
	User:loadUser,
	Articles:loadArticles,
	Message:sendMessageReducer
})

export default rootReducer