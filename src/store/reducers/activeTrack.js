import { START_TRACK } from "../actions/types/activeTrack";

const initialState = {
}

export default function activePlayerReducer(state = initialState, action) {
    switch (action.type) {
        case START_TRACK: {
            return {...state, trackReducer: action.payload}
        }
        default: return state
    }
}