import {combineReducers} from "redux";
import {participantsReducer} from "./participantsReducer";
import {stopwatchReducer} from "./stopwatchReducer";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
  participants: participantsReducer,
  stopwatch: stopwatchReducer,
  modal: modalReducer
});
