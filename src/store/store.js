import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";
import activePlaylistReducer from "./reducers/activePlaylist";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    trackStore: activePlayerReducer,
    playlistStore: activePlaylistReducer,
    isPlaying: activePlayerReducer,
    like: activePlaylistReducer,
  },
  middleware: getDefaultMiddleware => {
    return [thunk]
  }
});
