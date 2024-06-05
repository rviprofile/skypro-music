import axios from "axios";
import {
  deleteLikeSuccess,
  deleteLikeFailure,
  deleteLikeStarted,
} from "./../actions/creators/activeTrack.js";
import { getCookie } from "../../components/setCookie.js";
import getAccessToken from "../../components/API/getAccessToken.js";

export const deleteLikeCreator = (track) => async (dispatch, getState) => {
  dispatch(deleteLikeStarted());
  try {
    const { data } = await axios.delete(
      `https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("access")}`,
        },
      }
    );
    console.log(data);
    dispatch(deleteLikeSuccess(track));
  } catch (err) {
    if (err.response.status === 401) {
      getAccessToken().then((response) => {
        return dispatch(deleteLikeCreator(track));
      });
    }
    console.log(err);
    dispatch(deleteLikeFailure(err));
  }
};
