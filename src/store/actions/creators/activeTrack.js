// Здесь будет import { константы } from "./types/activeTrack.js"
import { CHANGE_PLAYLIST, PAUSE_TRACK, START_TRACK, UNPAUSE_TRACK, UPDATE_HISTORY } from "../types/activeTrack";

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

export const changePlaylistCreator = (arr) => ({
    type: CHANGE_PLAYLIST, 
    payload: {...arr}
})

export const updateHistoryCreator = (item) => ({
    type: UPDATE_HISTORY, 
    payload: item,
})