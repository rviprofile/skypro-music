// Здесь будет import { константы } from "./types/activeTrack.js"
import { type } from "@testing-library/user-event/dist/type";
import { PAUSE_TRACK, START_TRACK, UNPAUSE_TRACK } from "../types/activeTrack";

// И функции creators, которые генерируют типовые actions

export const activeTrackCreator = (track) => ({
    type: START_TRACK,
    payload: {...track},
})

export const pauseTrackCreator = () => ({
    type: PAUSE_TRACK,
})

export const unPauseTrackCreator = () => ({
    type: UNPAUSE_TRACK
})