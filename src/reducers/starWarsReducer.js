import { REQUEST_FETCHING, REQUEST_SUCCESS, REQUEST_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case REQUEST_FETCHING:
      return { ...state, fetching: true, error: "" };

    case REQUEST_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ""
      };

    case REQUEST_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
