import { PAUSE_TRACK, START_TRACK, UNPAUSE_TRACK } from "../actions/types/activeTrack";

const initialState = {
}

export default function activePlayerReducer(state = initialState, action) {
    switch (action.type) {
        case START_TRACK: {
            return {...state, trackReducer: action.payload, isPlaying: true}
        }

        case PAUSE_TRACK: {
            return {...state, isPlaying: false}
        }

        case UNPAUSE_TRACK: {
            return {...state, isPlaying: true}
        }
        default: return state
    }
}