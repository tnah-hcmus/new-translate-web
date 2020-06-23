import { ADD_CATEGORY, DELETE_CATEGORY } from "./types";
export const deleteCategory  = (category) => {
  return {
    type: DELETE_CATEGORY,
    payload:  category
  }
};
export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    payload: {name: category}
  });