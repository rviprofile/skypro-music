// Здесь будет import { константы } from "./types/activeTrack.js"
import { START_TRACK } from "../types/activeTrack";

// И функции creators, которые генерируют типовые actions

export const activeTrackRedux = (track) => ({
    type: START_TRACK,
    payload: {...track},
})