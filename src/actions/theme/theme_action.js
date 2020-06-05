import { SET_MODE, SET_COLOR, RESET_THEME} from "./types";
export const setMode = (mode) => {
    return {
        type: SET_MODE,
        payload: mode
    };
  }
export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: color
    };
}
export const resetTheme = () => {
    return {
        type: RESET_THEME
    };
}