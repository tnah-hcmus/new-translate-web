import { ADD_REPLIES, DELETE_REPLIES, DELETE_ALL_REPLIES, REPLACE_TABID  } from "./types";
export const addReplies = (tabID, id, replies) => ({
    type: ADD_REPLIES,
    payload: {tabID, id, replies}
  });
export const deleteReplies = (tabID, id) => ({
  type: DELETE_REPLIES,
  payload: {tabID, id}
});
export const deleteAllReplies = (tabID) => ({
  type: DELETE_ALL_REPLIES,
  payload: tabID
});
export const replaceTabID = (currentTabID, newTabID) => ({
  type: REPLACE_TABID ,
  payload: {currentTabID, newTabID}
});