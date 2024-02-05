import { CHANGE_CATEGORY } from "../actions/types/activeTrack";

const initialState = {
  actualCategory: [],
};

export default function crutchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY: {
      return { ...state, actualCategory: [action.payload] };
    }
    default:
      return state;
  }
}
