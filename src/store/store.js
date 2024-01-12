import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";
import activePlaylistReducer from "./reducers/activePlaylist";

export const store = configureStore({
    reducer: {
        trackStore: activePlayerReducer,
        playlistStore: activePlaylistReducer,
        isPlaying: activePlayerReducer,
    }
})