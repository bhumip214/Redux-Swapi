import axios from "axios";

export const REQUEST_FETCHING = "FETCHING";
export const REQUEST_SUCCESS = "SUCCESS";
export const REQUEST_FAILURE = "FAILURE";

export const getChars = () => dispatch => {
  dispatch({ type: REQUEST_FETCHING });
  axios
    .get("https://swapi.co/api/people/")
    .then(res =>
      dispatch({
        type: REQUEST_SUCCESS,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: REQUEST_FAILURE,
        payload: err
      })
    );
};
