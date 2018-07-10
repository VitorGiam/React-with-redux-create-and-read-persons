import axios from "axios";
import {
  POST_PEOPLE_PENDING,
  FETCH_PEOPLE_SUCCESS,
  POST_PEOPLE_FAIL
} from "./actionTypes";

export const postPeople = data => dispatch => {
  dispatch({
    type: POST_PEOPLE_PENDING
  });
  axios
    .post("/persons", data)
    .then(response => {
      console.log(response);

      dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: POST_PEOPLE_FAIL,
        payload: error
      });
    });
};
