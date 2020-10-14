import { SET_CREDIT } from "./types";
import database from '../../firebase/firebase';
//Set credit
export const setCredit = (credit) => {
    return {
        type: SET_CREDIT,
        payload: credit
    };
}
export const setCreditWCloud = (credit) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      const path = `users/${uid}/credit`;
      return database.setData({path, data: category},() => {
        dispatch(setCredit(credit))
      })
    }
}