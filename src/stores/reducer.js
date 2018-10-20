import {
  UPDATE_APP_STATE,
  SET_PREV_APP_STATE,
} from './actionTypes';

export default (state = {}, action) => {
 switch (action.type) {
  case UPDATE_APP_STATE:
    return {
      ...state,
      appState: action.appState,
    }
  case SET_PREV_APP_STATE:
    return {
      ...state,
      prevAppState: action.prevAppState,
    }
  default:
   return state
 }
}
