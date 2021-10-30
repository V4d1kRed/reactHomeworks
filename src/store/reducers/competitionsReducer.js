import {
  ADD_COMPETITION,
  SEARCH_COMPETITIONS_BY_NAME_AND_ID,
  SET_SEARCH_VALUE,
  SET_STATUS
} from "../actions/competitionsActions";

export const initialState = {
  searchValue: '',
  searchCompetitions: [],
  competitions: [
    {name: 'Running 100 meters', id: 649025, status: false},
    {name: 'Running 50 meters', id: 354123, status: false},
  ]
};

export const competitionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPETITION:
      return {
        ...state,
        competitions: [...state.competitions, action.payload],
        searchCompetitions: [...state.competitions, action.payload]
      };
    case SET_SEARCH_VALUE:
      return {...state, searchValue: action.payload};
    case SET_STATUS:
      return {
        ...state,
        competitions: state.competitions.map(item => {
          return item.id === action.payload ? {...item, status: true} : item;
        }),
        searchCompetitions: state.competitions.map(item => {
          return item.id === action.payload ? {...item, status: true} : item;
        })
      };
    case SEARCH_COMPETITIONS_BY_NAME_AND_ID:
      return {
        ...state,
        searchCompetitions: state.competitions.filter(competition => {
          return competition.name.toLowerCase().includes(state.searchValue.toLowerCase())
            || competition.id.toString().includes(state.searchValue.toString());
        }),
      };
    default:
      return {...state, searchCompetitions: state.competitions};
  }
};
