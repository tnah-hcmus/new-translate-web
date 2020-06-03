import { ADD_TAB, REMOVE_TAB, UPDATE_TAB,  REMOVE_ALL_TABS, UPDATE_COMMENTS } from "./types";
//import database from '../../firebase/firebase'
const createID = () => {
  let guid = 'xxyyx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}
export const deleteAll = () => ({
    type: REMOVE_ALL_TABS
  });

export const deleteTab = (id, category) => ({
    type: REMOVE_TAB, 
    payload: {id: id, category: category}
  });
export const addTab = (tab) => {
  tab.id = tab.id || createID();
  return (dispatch) => {
    dispatch({
      type: ADD_TAB,
      payload: tab
  });
  }
}
export const updateTab = (id, newInfo) => {
  return {
      type: UPDATE_TAB,
      payload: {id: id, info: newInfo}
  };
}
export const updateComments = (id,trans) => {
  return {
      type: UPDATE_COMMENTS,
      payload: {id: id,trans: trans}
  };
}