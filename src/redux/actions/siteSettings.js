import { NAVIGATION, SEARCH, LOGIN } from "./type";

export const navigationToggle = (value) => (dispatch) => {
  dispatch({ type: NAVIGATION, payload: value });
};
export const searchToggle = (value) => (dispatch) => {
  dispatch({ type: SEARCH, payload: value });
};
export const loginToggle = (value) => (dispatch) => {
  dispatch({ type: LOGIN, payload: value });
};
