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
        return {
          mode: action.payload,
          color: state.color
        }
      case SET_COLOR:
        return {
          mode: state.mode,
          color: action.payload
        }
      case RESET_THEME:
        return INITIAL_STATE;
      default:
        return state;
    }
  }
  