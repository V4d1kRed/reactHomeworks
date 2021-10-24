import {
  ADD_CURRENT_PARTICIPANT,
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
  SEARCH_PARTICIPANTS_BY_NAME_AND_ID, SET_SEARCH_VALUE
} from "../actions/participantsActions";

export const initialState = {
  currentParticipant: {},
  participants: [
    {
      id: 534873,
      time: 314323,
      firstName: 'Oleg',
      secondName: 'Ivanov'
    },
    {
      id: 534233,
      time: 32123,
      firstName: 'Ostap',
      secondName: 'Ivanov'
    },
    {
      id: 423632,
      time: 745234,
      firstName: 'Vadik',
      secondName: 'Ivanov'
    },
    {
      id: 984235,
      time: 12554,
      firstName: 'Slavik',
      secondName: 'Ivanov'
    },
  ],
  searchParticipants: [],
  searchValue: ''
};

export const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return {...state, participants: [...state.participants, action.payload]};
    case DELETE_PARTICIPANT:
      return {...state, participants: state.participants.filter(participant => participant.id !== action.payload)};
    case ADD_CURRENT_PARTICIPANT:
      return {...state, currentParticipant: {...action.payload}};
    case SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case SEARCH_PARTICIPANTS_BY_NAME_AND_ID:
      return {
        ...state,
        searchParticipants: state.participants.filter(participant => {
          return participant.firstName.toLowerCase().includes(state.searchValue.toLowerCase())
            || participant.id.toString().includes(state.searchValue.toString())
        })
      };
    default:
      return state;
  }
}
