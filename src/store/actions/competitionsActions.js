export const ADD_COMPETITION = '[COMPETITION] Add new competition';
export const SET_SEARCH_VALUE = '[COMPETITION] Set search value';
export const SET_STATUS = '[COMPETITION] Set status value';
export const SEARCH_COMPETITIONS_BY_NAME_AND_ID = '[COMPETITION] Search competitions by name and id';

export const addCompetitionAction = (payload) => ({type: ADD_COMPETITION, payload});
export const setSearchValueAction = (payload) => ({type: SET_SEARCH_VALUE, payload});
export const setStatusAction = (payload) => ({type: SET_STATUS, payload});
export const searchCompetitionsByNameAndIdAction = (payload) => ({type: SEARCH_COMPETITIONS_BY_NAME_AND_ID, payload});
