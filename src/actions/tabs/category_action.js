import { ADD_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from "./types";
import database from '../../firebase/firebase';
//Delete a category
export const deleteCategory  = (category) => {
  return {
    type: DELETE_CATEGORY,
    payload:  category
  }
};
export const deleteCategoryWCloud = (name) => {
  return (dispatch, getState) => {
    const state = getState();
    const {auth, category} = state;
    const uid = auth.uid;
    const categories =  category.filter((item) => item.name === name);
    if(categories.length > 0) {
      const path = `users/${uid}/categories/${categories[0].id}`;
      return database.deleteData({path})
            .then(() => {
              dispatch(deleteCategory(name));
            })
            .catch((err) => {
              console.log(err);
            });
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
    const path = `users/${uid}/categories`;
    const cat = getState().category.filter((item) => item.name === category);
    if(cat.length===0) {
      return database.pushData({path, data: category})
            .then((ref) => {
              dispatch(addCategory(category, ref.key));
            })
            .catch((err) => {
              console.log(err);
            });
    } else {
      return;
    }

  }
}

export const setCategory = (categories) => ({
  type: SET_CATEGORIES, 
  payload: categories
});
export const startSetCategories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/categories`;
    return database.readData({path})
          .then((snapshot) => {
            let categories = [];
            if(snapshot) {
              categories = Object.keys(snapshot).map((key) => ({id: key, name: snapshot[key]}))
            }
            dispatch(setCategory(categories));
          })
          .catch((err) => {
            console.log(err);
          });
  };
};