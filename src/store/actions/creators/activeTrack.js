import { getCookie } from "../../../components/setCookie";
import { store } from "../../store";
import {
  CHANGE_PLAYLIST,
  PAUSE_TRACK,
  START_TRACK,
  UNPAUSE_TRACK,
  UPDATE_HISTORY,
} from "../types/activeTrack";

import {
  ADD_LIKE_FAILURE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_STARTED,
  DELETE_LIKE_FAILURE,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_STARTED,
} from "../types/activeTrack";

export const addLikeStarted = () => ({
 type: ADD_LIKE_STARTED
});

export const addLikeSuccess = (track) => ({
  type: ADD_LIKE_SUCCESS, 
  payload: {
    ...track
  }
})
export const addLikeFailure = error => ({
  type: ADD_LIKE_FAILURE,
  payload: {
    error
  }
});

export const deleteLikeStarted = () => ({
  type:  DELETE_LIKE_STARTED
 });
 
 export const deleteLikeSuccess = (track) => ({
   type:  DELETE_LIKE_SUCCESS, 
   payload: {
     ...track
   }
 })
 export const deleteLikeFailure = error => ({
   type:  DELETE_LIKE_FAILURE,
   payload: {
     error
   }
 });

export const activeTrackCreator = (track) => ({
  type: START_TRACK,
  payload: { ...track },
});

export const pauseTrackCreator = () => ({
  type: PAUSE_TRACK,
});

export const unPauseTrackCreator = () => ({
  type: UNPAUSE_TRACK,
});

export const changePlaylistCreator = (arr) => ({
  type: CHANGE_PLAYLIST,
  payload: { ...arr },
});

export const updateHistoryCreator = (item) => ({
  type: UPDATE_HISTORY,
  payload: item,
});

// export const detchLikeStarted = () => ({
//   type: FETCH_LIKES_STARTED,
// });
// export const detchLikeSuccess = (likes) => ({
//   type: FETCH_LIKES_SUCCESS,
//   payload: { likes },
// });
// export const detchLikeFailure = (error) => ({
//   type: FETCH_LIKES_FAILURE,
//   payload: { error },
// });
