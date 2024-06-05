import {
  CHANGE_PLAYLIST,
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
