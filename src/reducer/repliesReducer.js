import {
  ADD_REPLIES, 
  DELETE_REPLIES,
  DELETE_ALL_REPLIES,
  REPLACE_TABID
} from '../actions/replies/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STATE_REPLIES':
        if(action.payload) {
          return { ...state, ...action.payload};
        }
        else return state;
    case ADD_REPLIES:
        if(state[action.payload.tabID]) {
            state[action.payload.tabID][action.payload.id] = action.payload.replies;
        }
        else {
            state[action.payload.tabID] = {};
            state[action.payload.tabID][action.payload.id] = action.payload.replies;
        }
        return state;
    case DELETE_REPLIES:
        delete state[action.payload.tabID][action.payload.id] 
        return state;
    case DELETE_ALL_REPLIES:
        delete state[action.payload]
        return state;
    case REPLACE_TABID:
        state[action.payload.newTabID] = state[action.payload.currentTabID];
        delete state[action.payload.currentTabID];
        return state;
    default:
      return state;
  }
}
