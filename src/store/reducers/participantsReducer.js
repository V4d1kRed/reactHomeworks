import {
  ADD_CURRENT_PARTICIPANT,
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  SEARCH_PARTICIPANTS_BY_NAME_AND_ID,
  SET_AMOUNT_PARTICIPANTS,
  SET_SEARCH_VALUE,
  SET_WINNING_PARTICIPANTS
} from "../actions/participantsActions";

export const initialState = {
  searchValue: '',
  amountParticipants: null,
  currentParticipant: {},
  winningParticipants: [],
  searchParticipants: [],
  participants: [
    {firstName: 'Vadik', secondName: 'Red', id: 973212, time: 314332, competitionId: 649025},
    {firstName: 'Nikita', secondName: 'Blue', id: 242345, time: 42134, competitionId: 354123},
    {firstName: 'Slavik', secondName: 'Green', id: 634234, time: 143232, competitionId: 354123},
    {firstName: 'Oleg', secondName: 'Yellow', id: 586343, time: 76534, competitionId: 354123},
    {firstName: 'Kolya', secondName: 'Brown', id: 6345814, time: 465734, competitionId: 649025},
  ],
};

export const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return {
        ...state,
        participants: [...state.participants, action.payload],
      };
    case DELETE_PARTICIPANT:
      return {
        ...state,
        participants: state.participants.filter(participant => participant.id !== action.payload),
        searchParticipants: state.searchParticipants.filter(participant => participant.id !== action.payload),
      };
    case ADD_CURRENT_PARTICIPANT:
      return {
        ...state,
        currentParticipant: {...action.payload},
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_WINNING_PARTICIPANTS:
      return {
        ...state,
      };
    case SET_AMOUNT_PARTICIPANTS:
      return {...state, amountParticipants: state.participants.length}
    case SEARCH_PARTICIPANTS_BY_NAME_AND_ID:
      return {
        ...state,
        searchParticipants: state.participants.filter(participant => {
          return participant.firstName.toLowerCase().includes(state.searchValue.toLowerCase())
            || participant.id.toString().includes(state.searchValue.toString());
        }),
      };
    default:
      return {...state, searchParticipants: state.participants}
  }
}
