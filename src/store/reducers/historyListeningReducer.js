import { UPDATE_HISTORY, REMOVE_HISTORY } from "../actions/types/activeTrack";

const initialState = {
};

export default function historyListeningReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HISTORY: {
      const newItem = action.payload;
      const history = {...state.history, newItem}
      return {...state.history, ...history};
    }
    case REMOVE_HISTORY: {
      return { ...state };
    }
    default:
      return state;
  }
}
