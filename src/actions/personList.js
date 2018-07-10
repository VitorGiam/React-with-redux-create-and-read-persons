import axios from "axios";
import {
  FETCH_PEOPLE_PENDING,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAIL
} from "./actionTypes";

export const fetchPeople = () => dispatch => {
  dispatch({
    type: FETCH_PEOPLE_PENDING
  });
  axios("/persons")
    .then(response => {
      dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PEOPLE_FAIL,
        payload: error
      });
    });
};
