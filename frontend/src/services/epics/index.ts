import { combineEpics } from "redux-observable";
import TarotEpics from './tarot';

export default combineEpics(
    TarotEpics,
)