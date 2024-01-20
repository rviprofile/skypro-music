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
    console.log(track.id);
    const { data } = await axios.post(
      `https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`, {},
      {
        headers: {
          Authorization: `Bearer ${getCookie("access")}`,
        },
      }
    );
    dispatch(addLikeSuccess(track));
  } catch (err) {
    dispatch(addLikeFailure(err));
  }
};

// export const addLikeCreator = ({track}) => {
//     return dispatch => {
//       dispatch(addLikeStarted());

//       axios.post(`https://skypro-music-api.skyeng.tech/catalog/track/${track.id}/favorite/`, {
//         headers: {
//           Authorization: `Bearer ${getCookie("access")}`,
//         },
//       }).then((res) => {
//         dispatch(addLikeSuccess(track))
//       }).catch(err => {
//         dispatch(addLikeFailure(err))
//       })
//     }
//   }
