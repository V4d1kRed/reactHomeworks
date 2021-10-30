import {combineReducers} from "redux";
import {participantsReducer} from "./participantsReducer";
import {stopwatchReducer} from "./stopwatchReducer";
import {modalReducer} from "./modalReducer";
import {competitionsReducer} from "./competitionsReducer";

export const rootReducer = combineReducers({
  competitions: competitionsReducer,
  participants: participantsReducer,
  stopwatch: stopwatchReducer,
  modal: modalReducer
});
