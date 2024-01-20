import {
  CHANGE_PLAYLIST,
  ADD_LIKE_FAILURE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_STARTED,
} from "../actions/types/activeTrack";

const initialState = {};

export default function activePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PLAYLIST: {
      return { ...state, playlistReducer: action.payload };
    }
    case ADD_LIKE_STARTED: {
        return {...state, }
    }
    case ADD_LIKE_SUCCESS: {
        return {...state.like, like: action.payload}
    }
    case ADD_LIKE_FAILURE: {
        return {...state, }
    }
    default:
      return state;
  }
}
