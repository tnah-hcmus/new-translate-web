import { combineReducers, createStore, applyMiddleware} from 'redux';
import {loadState, saveState} from './localStorage.js';
import thunk from 'redux-thunk';
import {throttle} from 'lodash';
import tabsReducer from '../reducer/tabsReducer';
import categoryReducer from '../reducer/categoryReducer';
import repliesReducer from '../reducer/repliesReducer.js';
import themeReducer from '../reducer/themeReducer.js';
import creditReducer from '../reducer/creditReducer.js';

//Xóa sau 20 ngày
const createID = () => {
  let guid = 'xxyyx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}

const INITIAL_STATE = [
  {
    id: createID(),
    category: "guide",
    title : "Quản lý tab dịch",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/Tg1VcwH3gpY'
  },
  {
    id: createID(),
    category: "guide",
    title : "Hướng dẫn dịch bài",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: ''
  },
  {
    id: createID(),
    category: "guide",
    title : "Quản lý comment",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: ''
  },
  {
    id: createID(),
    category: "guide",
    title : "Thay đổi giao diện",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: ''
  }
];
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
/*
console.log(preState);
//Xóa sau 20 ngày

if(preState.category.filter((item) => item.name === 'guide').length === 0) {
  preState.category = [...preState.category, {name:'guide'}];
  preState.tabs = [...preState.tabs, ...INITIAL_STATE];
}
console.log(preState);
*/

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
