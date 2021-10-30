export const OPEN_MODAL_STOPWATCH = '[MODAL] Modal for stopwatch is open';
export const CLOSE_MODAL_STOPWATCH = '[MODAL] Modal for stopwatch is close';

export const openModalAction = (payload) => ({type: OPEN_MODAL_STOPWATCH, payload});
export const closeModalAction = (payload) => ({type: CLOSE_MODAL_STOPWATCH, payload});
