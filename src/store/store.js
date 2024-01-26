import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";
import activePlaylistReducer from "./reducers/activePlaylist";
import likesCounterReducer from "./reducers/likesCounter";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    trackStore: activePlayerReducer,
    playlistStore: activePlaylistReducer,
    isPlaying: activePlayerReducer,
    likes: likesCounterReducer,
  },
  middleware: getDefaultMiddleware => {
    return [thunk]
  }
});
