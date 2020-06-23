import { combineReducers, createStore, applyMiddleware} from 'redux';
import {loadState, saveState, loadStateDB, saveStateDB} from './storage.js';
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
let configState;
const serializedState = localStorage.getItem('reddit-app-712');
if (serializedState !== null) {
  const preState = JSON.parse(serializedState);
  configState = preState;
  saveStateDB({
    tabs: preState.tabs,
    replies: preState.replies    
  });
  saveState({
    category: preState.category,
    theme: preState.theme,
    credit: preState.credit
  });
  localStorage.removeItem('reddit-app-712');
  localStorage.setItem('reddit-app-713', JSON.stringify(preState));
}
else {
  configState = loadState() || {};
}     


//lấy configState từ localStorage nếu có
//const configState = loadState() || {};

loadStateDB().then((data) => {
  store.dispatch({
    type: 'STATE_TAB',
    payload: data.tabs
  });
  store.dispatch({
    type: 'STATE_REPLIES',
    payload: data.replies
  });
})
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
const store = createStore(rootReducer, configState, applyMiddleware(thunk));

store.subscribe(throttle(() => {
  const save = store.getState();
  saveState({
    category: save.category,
    theme: save.theme,
    credit: save.credit
  });
  saveStateDB({
    tabs: save.tabs,
    replies: save.replies    
  });
}, 1000));


export default store;
