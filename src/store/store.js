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
const _createUUID = () => {
  let guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
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
  credit: creditReducer,
});


//lấy configState từ localStorage nếu có
let configState = loadState() || {};


//Xóa sau 20 ngày
if(!(Object.keys(configState).length === 0 && configState.constructor === Object)) {
  if(configState.category.filter((item) => item.name === 'guide').length === 0) {
    configState.category = [...configState.category, {name:'guide'}];
    configState.tabs = [...INITIAL_STATE];
  }
}

const serializedState = localStorage.getItem('rvn-uuid');
if (serializedState === null) {
  localStorage.setItem('rvn-uuid', JSON.stringify(_createUUID()));
}



//Tạo store + gán listener cho mỗi lần thay đổi store -> ghi vào json
const store = createStore(rootReducer, configState, applyMiddleware(thunk));
//Pull data from IndexedDB
loadStateDB().then((data) => {
  if(data) {
    store.dispatch({
      type: 'STATE_TAB',
      payload: data.tabs.filter((tab) => tab.category !== "guide")
    });
    store.dispatch({
      type: 'STATE_REPLIES',
      payload: data.replies
    });
  }
})

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
