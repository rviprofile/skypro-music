import { configureStore } from "@reduxjs/toolkit";
import activePlayerReducer from "./reducers/activeTrack";

export const store = configureStore({
    reducer: {
        trackStore: activePlayerReducer,
        isPlaying: activePlayerReducer
    }
})