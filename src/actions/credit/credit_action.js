import { SET_CREDIT } from "./types";
export const setCredit = (credit) => {
    return {
        type: SET_CREDIT,
        payload: credit
    };
}