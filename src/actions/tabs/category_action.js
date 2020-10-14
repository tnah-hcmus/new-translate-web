import { ADD_CATEGORY, DELETE_CATEGORY } from "./types";
import database from '../../firebase/firebase';
//Delete a category
export const deleteCategory  = (category) => {
  return {
    type: DELETE_CATEGORY,
    payload:  category
  }
};
export const deleteCategoryWCloud = (category) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const cat = getState().category.filter((item) => item.name === category);
    if(cat.length > 0) {
      const path = `users/${uid}/category/${cat[0].id}`;
      return database.deleteData({path},() => {
        dispatch(deleteCategory(category));
      }) 
    }
    else {
      return dispatch(deleteCategory(category));
    }
  }
}

//Add a category
export const addCategory = (category, id) => ({
    type: ADD_CATEGORY,
    payload: {name: category, id}
  });
export const addCategoryWCloud = (category) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/category`;
    return database.pushData({path, data: category},(ref) => {
      dispatch(addCategory(category, ref.key));
    })
  }
}