import {
  UPDATE_APP_STATE,
  SET_PREV_APP_STATE,
} from './actionTypes';

export const updateAppState = (appState) => {
  return {
    type: UPDATE_APP_STATE,
    appState,
  };
}

export const setPrevAppState = (appState) => {
  return {
    type: SET_PREV_APP_STATE,
    prevAppState: appState,
  };
}
