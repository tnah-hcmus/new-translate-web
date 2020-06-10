import {
  ADD_TAB,
  REMOVE_TAB,
  REMOVE_ALL_TABS,
  UPDATE_COMMENTS,
  UPDATE_TAB
} from '../actions/tabs/types';

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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TAB:
        if(state.filter((item) => item.link === action.payload.link).length === 0 || (action.payload.link === '')) {
          return [ ...state, action.payload];
        } 
        else return state;
    case UPDATE_COMMENTS:
          return state.map((item) => {
            if(item.id === action.payload.id){
              item.trans = action.payload.trans;
            }
            return item;
          });
    case UPDATE_TAB:
          return state.map((item) => {
            if(item.id === action.payload.id){
              return action.payload.info;
            }
            return item;
          });
    case REMOVE_TAB:
        return state.filter((item) => {
        return item.id !== action.payload.id || item.category !== action.payload.category;
      })
    case REMOVE_ALL_TABS:
      return INITIAL_STATE;
    default:
      return state;
  }
}
