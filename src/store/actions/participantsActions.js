export const ADD_PARTICIPANT = '[PARTICIPANT] Add new participant';
export const DELETE_PARTICIPANT = '[PARTICIPANT] Delete participant';
export const ADD_CURRENT_PARTICIPANT = '[PARTICIPANT] Add current participant';
export const SET_SEARCH_VALUE = '[PARTICIPANT] Set search value';
export const SET_WINNING_PARTICIPANTS = '[PARTICIPANT] Set winning participants';
export const SET_AMOUNT_PARTICIPANTS = '[PARTICIPANT] Set amount participants';
export const SEARCH_PARTICIPANTS_BY_NAME_AND_ID = '[PARTICIPANT] Search participants by name and id';

export const addParticipantAction = (payload) => ({type: ADD_PARTICIPANT, payload});
export const deleteParticipantAction = (payload) => ({type: DELETE_PARTICIPANT, payload});
export const addCurrentParticipantAction = (payload) => ({type: ADD_CURRENT_PARTICIPANT, payload});
export const setSearchValueAction = (payload) => ({type: SET_SEARCH_VALUE, payload});
export const setWinningParticipantsAction = (payload) => ({type: SET_WINNING_PARTICIPANTS, payload});
export const setAmountParticipantsAction = (payload) => ({type: SET_AMOUNT_PARTICIPANTS, payload});
export const searchParticipantsByNameAndIdAction = (payload) => ({type: SEARCH_PARTICIPANTS_BY_NAME_AND_ID, payload});

