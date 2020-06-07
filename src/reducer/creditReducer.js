import {
    SET_CREDIT
  } from '../actions/credit/types';
  
const INITIAL_STATE =  ''
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_CREDIT:
        return action.payload;
      default:
        return state;
    }
  }
  