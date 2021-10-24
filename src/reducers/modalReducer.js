import {CLOSE_MODAL_STOPWATCH, OPEN_MODAL_STOPWATCH} from "../actions/modalActions";

export const initialState = {
  stateModalStopwatch: false
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_STOPWATCH:
      document.body.classList.add('lock');
      return {...state, stateModalStopwatch: true};
    case CLOSE_MODAL_STOPWATCH:
      document.body.classList.remove('lock');
      return {...state, stateModalStopwatch: false};
    default:
      return state;
  }
};
