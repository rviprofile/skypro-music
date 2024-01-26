import axios from "axios";
import {
  addLikeSuccess,
  addLikeFailure,
  addLikeStarted,
} from "./../actions/creators/activeTrack.js";
import { getCookie } from "../../components/setCookie.js";

export const addLikeCreator = (track) => async (dispatch, getState) => {
  dispatch(addLikeStarted());
  try {
    const { data } = await axios.post(
      `https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getCookie("access")}`,
        },
      }
    );
    console.log(data);
    dispatch(addLikeSuccess(track));
  } catch (err) {
    console.log(err);
    dispatch(addLikeFailure(err));
  }
};
