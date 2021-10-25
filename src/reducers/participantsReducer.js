import {
  ADD_CURRENT_PARTICIPANT,
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  SEARCH_PARTICIPANTS_BY_NAME_AND_ID, SET_AMOUNT_PARTICIPANTS, SET_SEARCH_VALUE, SET_WINNING_PARTICIPANT
} from "../actions/participantsActions";

export const initialState = {
  searchValue: '',
  amountParticipants: null,
  winningParticipant: {},
  currentParticipant: {},
  searchParticipants: [],
  participants: [
    {id: 543234, firstName: 'Vadik', secondName: 'Green', time: 36423},
    {id: 781539, firstName: 'Oleg', secondName: 'Red', time: 91822},
    {id: 123912, firstName: 'Nikita', secondName: 'Blue', time: 98132},
    {id: 912317, firstName: 'Kolya', secondName: 'Yellow', time: 28433}
  ]
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
    case SET_WINNING_PARTICIPANT:
      return {
        ...state,
        winningParticipant: [...state.participants].sort((a, b) => a.time - b.time)[0],
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
