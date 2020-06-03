import {
  ADD_TAB,
  REMOVE_TAB,
  REMOVE_ALL_TABS,
  UPDATE_COMMENTS,
  UPDATE_TAB
} from '../actions/tabs/types';

const INITIAL_STATE = [];

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
