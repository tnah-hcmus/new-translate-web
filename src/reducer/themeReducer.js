import {
    SET_MODE, 
    SET_COLOR,
    RESET_THEME
  } from '../actions/theme/types';
  
const INITIAL_STATE =  {
      mode: "light",
      color:  ""
    };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_MODE:
        state.mode = action.payload;
        return state;
      case SET_COLOR:
        state.color = action.payload;
        return state;
      case RESET_THEME:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  