import {
  CHANGE_PLAYLIST,
  ADD_LIKE_FAILURE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_STARTED,
  DELETE_LIKE_FAILURE,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_STARTED,
} from "../actions/types/activeTrack";

const initialState = {};

export default function activePlaylistReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PLAYLIST: {
      return { ...state, playlistReducer: action.payload };
    }
    default:
      return state;
  }
}
