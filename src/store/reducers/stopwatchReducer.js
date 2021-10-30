import {RESET_STOPWATCH, SET_INTERVAL_ID, UPDATE_STOPWATCH} from "../actions/stopwatchActions";

export const initialState = {
  time: 0,
  intervalId: null,
};

export const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERVAL_ID:
      return {...state, intervalId: action.payload};
    case UPDATE_STOPWATCH:
      return {...state, time: action.payload};
    case RESET_STOPWATCH:
      return {...state, time: 0};
    default:
      return state;
  }
};
