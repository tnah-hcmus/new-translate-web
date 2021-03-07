import {
  ADD_CATEGORY, 
  DELETE_CATEGORY,
  SET_CATEGORIES
} from '../actions/tabs/types';

const INITIAL_STATE = [
  {
    id: 'sureNotRep',
    name: "blank"
  },
  {
    id: 'notRep',
    name: "guide"
  }
];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
        if(state.filter((item) => item.name === action.payload.name).length === 0) {
          return [...state, action.payload];
        } 
        else return state;
    case DELETE_CATEGORY:
      if(action.payload !== 'blank') return state.filter((item) => {
        return item.name !== action.payload;
      });
      else return state;
    case SET_CATEGORIES:
      return [...INITIAL_STATE,...action.payload]
    default:
      return state;
  }
}
