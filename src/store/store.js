import { combineReducers, createStore, applyMiddleware} from 'redux';
import {loadState, saveState} from './localStorage.js';
import thunk from 'redux-thunk';
import {throttle} from 'lodash';
import tabsReducer from '../reducer/tabsReducer';
import categoryReducer from '../reducer/categoryReducer';
import repliesReducer from '../reducer/repliesReducer.js';
import themeReducer from '../reducer/themeReducer.js';
import creditReducer from '../reducer/creditReducer.js';
//map reducer -> store
const rootReducer = combineReducers({
  category: categoryReducer,
  tabs: tabsReducer,
  replies: repliesReducer,
  theme: themeReducer,
  credit: creditReducer
});

//lấy preState từ localStorage nếu có
const preState = loadState() || {};

//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(rootReducer, preState, applyMiddleware(thunk));
store.subscribe(throttle(() => {
  saveState({
    category: store.getState().category,
    tabs: store.getState().tabs,
    replies: store.getState().replies,
    theme: store.getState().theme,
    credit: store.getState().credit
  });
}, 1000));


export default store;
