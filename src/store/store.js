import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";
import activePlaylistReducer from "./reducers/activePlaylist";
import likesCounterReducer from "./reducers/likesCounter";
import { thunk } from "redux-thunk";
import crutchReducer from "./reducers/crutchReducer";

export const store = configureStore({
  reducer: {
    trackStore: activePlayerReducer,
    playlistStore: activePlaylistReducer,
    isPlaying: activePlayerReducer,
    likes: likesCounterReducer,
    activeCategory: crutchReducer
  },
  middleware: getDefaultMiddleware => {
    return [thunk]
  }
});
