import { initialState } from "../state";
import { ReduxAction } from "../../models";
import { RESET_DECK, SHUFFLE_DECK } from "../constants";

export const Deck = (state = initialState, action: ReduxAction) => {
    switch(action.type) {
        case RESET_DECK:
            return initialState.Deck;
        case SHUFFLE_DECK:
            // the payload must be the shuffle method that takes an Object of TarotCards to shuffle and return
            return action.payload(state.Deck)
        default:
            return state;
    }
}