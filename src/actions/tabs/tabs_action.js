import { ADD_TAB, SET_TAB, REMOVE_TAB, UPDATE_TAB,  REMOVE_ALL_TABS, UPDATE_COMMENTS } from "./types";
import database from '../../firebase/firebase';
//Delete all tab
export const deleteAll = () => ({
    type: REMOVE_ALL_TABS
});
export const deleteAllWCloud = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs`;
    return database.deleteData({path}).then(() => {
      dispatch(deleteAll());
    })
  }
}

//Delete a tab
export const deleteTab = (id, category) => ({
    type: REMOVE_TAB, 
    payload: {id: id, category: category}
  });
export const deleteTabWCloud = (id, category) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs/${id}`;
    return database.deleteData({path}).then(() => {
      dispatch(deleteTab(id, category));
    })
  }
}

//Add a tab
export const addTab = (tab) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs`;
    return database.pushData({path, data: tab}).then( (ref) => {
      tab.id = ref.key;
      dispatch({
        type: ADD_TAB,
        payload: tab
      });
    })
  }
}

//Update a tab
export const updateTab = (id, newInfo) => {
  return {
      type: UPDATE_TAB,
      payload: {id: id, info: newInfo}
  };
}
export const updateTabWCloud = (id, newInfo) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs/${id}`;
    return database.updateData({path, data: newInfo}).then(() => {
      dispatch(updateTab(id, newInfo));
    })
  }
}

//Update trans in a tab
export const updateComments = (id,trans) => {
  return {
      type: UPDATE_COMMENTS,
      payload: {id: id,trans: trans}
  };
}
export const updateCommentsWCloud = (id, trans) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs/${id}/trans`;
    return database.updateData({path, data: trans}).then(() => {
      dispatch(updateComments(id, trans));
    })
  }
}

//Init tabs
export const setTabs = (tabs) => ({
  type: SET_TAB, 
  payload: {tabs}
});
export const startSetTabs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const path = `users/${uid}/tabs`;
    return database.readData({path}).then((snapshot) => {
      const tabs = [];
      if(snapshot) {
        snapshot.forEach((childSnapshot) => {
          tabs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
      }
      dispatch(setTabs(tabs));
    });
  };
};