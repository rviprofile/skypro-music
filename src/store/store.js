import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";
import activePlaylistReducer from "./reducers/activePlaylist";
import historyListeningReducer from "./reducers/historyListeningReducer";

export const store = configureStore({
    reducer: {
        trackStore: activePlayerReducer,
        playlistStore: activePlaylistReducer,
        history: historyListeningReducer,
        isPlaying: activePlayerReducer,
    }
})