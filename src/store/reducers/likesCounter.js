import {
  ADD_LIKE_FAILURE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_STARTED,
  DELETE_LIKE_FAILURE,
  DELETE_LIKE_SUCCESS,
  DELETE_LIKE_STARTED,
} from "../actions/types/activeTrack";

const initialState = {
    post: [],
    delete: []
};

export default function likesCounterReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LIKE_STARTED: {
            return { ...state };
          }
          case ADD_LIKE_SUCCESS: {
            return { ...state, count: [...state.post, action.payload] };
          }
          case ADD_LIKE_FAILURE: {
            return { ...state };
          }
          case DELETE_LIKE_STARTED: {
            return { ...state };
          }
          case DELETE_LIKE_SUCCESS: {
            return { ...state, count: [...state.delete, action.payload] };
          }
          case DELETE_LIKE_FAILURE: {
            return { ...state };
          }
          default:
            return state;
    }
}