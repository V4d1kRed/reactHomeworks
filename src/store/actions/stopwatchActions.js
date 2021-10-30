export const SET_INTERVAL_ID = '[STOPWATCH] Set interval id';
export const UPDATE_STOPWATCH = '[STOPWATCH] Update stopwatch';
export const RESET_STOPWATCH = '[STOPWATCH] Reset stopwatch';

export const setIntervalIdAction = (payload) => ({type: SET_INTERVAL_ID, payload});
export const startStopwatchAction = (payload) => ({type: UPDATE_STOPWATCH, payload});
export const resetStopwatchAction = (payload) => ({type: RESET_STOPWATCH, payload});
