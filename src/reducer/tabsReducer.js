import {
  ADD_TAB,
  SET_TAB,
  REMOVE_TAB,
  REMOVE_ALL_TABS,
  UPDATE_COMMENTS,
  UPDATE_TAB,
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
    link: 'https://www.youtube.com/embed/nuOvZai5Rqw?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Hướng dẫn dịch bài",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/_Elq-h9ecFE?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Quản lý comment",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/JKWiIAYWRw0?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Thay đổi giao diện",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/bwryPI_W_bI?enablejsapi=1'
  }
  ];
const BASE_STATE = [
  {
    id: createID(),
    category: "blank",
    title : "Tab này chưa có bài dịch nào",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: '',
    note: '',
    credit: '',
    trans: null,
    info: null 
  },
  {
    id: createID(),
    category: "guide",
    title : "Quản lý tab dịch",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/nuOvZai5Rqw?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Hướng dẫn dịch bài",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/_Elq-h9ecFE?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Quản lý comment",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/JKWiIAYWRw0?enablejsapi=1'
  },
  {
    id: createID(),
    category: "guide",
    title : "Thay đổi giao diện",
    iconHref: "assets/img/icons.svg#icon-windows",
    link: 'https://www.youtube.com/embed/bwryPI_W_bI?enablejsapi=1'
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STATE_TAB':
        if(action.payload) {
          return [ ...state, ...action.payload];
        }
        else return state;
    case ADD_TAB:
        if(state.filter((item) => item.link === action.payload.link).length === 0 || (action.payload.link === '')) {
          return [ ...state, action.payload];
        } 
        else return state;
    case SET_TAB:
        if(action.payload.tabs && action.payload.tabs.find(item => item.category == 'blank')) return [...state,...action.payload.tabs]
        else return [...BASE_STATE,...action.payload.tabs];
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
        const result = state.filter((item) => {
          return item.id !== action.payload.id || item.category !== action.payload.category;
        });
        if(result.length >= 4) return result;
        else return BASE_STATE;
    case REMOVE_ALL_TABS:
      return BASE_STATE;
    default:
      return state;
  }
}
