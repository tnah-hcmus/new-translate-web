import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import tabsReducer from '../reducer/tabsReducer';
import categoryReducer from '../reducer/categoryReducer';
import repliesReducer from '../reducer/repliesReducer.js';
import themeReducer from '../reducer/themeReducer.js';
import creditReducer from '../reducer/creditReducer.js';
import authReducer from '../reducer/authReducer';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';

const _createUUID = () => {
  let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  let r = Math.random() * 16 | 0,
  v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}

//map reducer -> store
const rootReducer = combineReducers({
  category: categoryReducer,
  tabs: tabsReducer,
  replies: repliesReducer,
  theme: themeReducer,
  credit: creditReducer,
  auth: authReducer,
});
const localDB = localForage.createInstance({
  name: "RVN-data"
});

const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'theme', 'replies', 'category'],
  blacklist: ['tabs', 'credit'],
  storage: localDB,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const serializedState = localStorage.getItem('rvn-uuid');
if (serializedState === null) {
  localStorage.setItem('rvn-uuid', JSON.stringify(_createUUID()));
}



//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

let persistor = persistStore(store);


export {store , persistor};
