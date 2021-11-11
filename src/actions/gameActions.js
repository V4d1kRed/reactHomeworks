export const NEW_GAME = '[Game] New game';
export const ADD_WINNER = '[Game] Add winner';
export const ADD_HISTORY = '[Game] Add history';
export const TOGGLE_SIGN = '[Game] Toggle sign';
export const CHANGE_NAME = '[Game] Change name';
export const BACK_TO_STEP = '[Game] Back to current step';
export const SHOW_RESULT_GAME = '[Game] Show result game';
export const CHANGE_STATUS_GAME = '[Game] Change status game';
export const ADD_HISTORY_LOCAL_STORAGE = '[Game] Get info from Local storage';

export const showResultGame = (result) => ({
  type: SHOW_RESULT_GAME,
  payload: result,
});

export const putFromLocalStorage = (history) => ({
  type: ADD_HISTORY_LOCAL_STORAGE,
  payload: history,
});

export const addWinner = (sign) => ({
  type: ADD_WINNER,
  payload: {sign},
});

export const changePlayerName = (names) => ({
  type: CHANGE_NAME,
  payload: names,
});

export const addToHistory = (squares) => ({
  type: ADD_HISTORY,
  payload: {squares},
});

export const backToCurrentStep = (currentStep) => ({
  type: BACK_TO_STEP,
  payload: {currentStep},
});

export const changeStatusGame = () => ({
  type: CHANGE_STATUS_GAME,
});

export const toggleSign = (sign) => ({
  type: TOGGLE_SIGN,
  payload: sign,
});
