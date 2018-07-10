import axios from "axios";
import {
  POST_PEOPLE_PENDING,
  POST_PEOPLE_SUCCESS,
  POST_PEOPLE_FAIL
} from "./actionTypes";

export const postPeople = (data) => dispatch => {
  dispatch({
    type: POST_PEOPLE_PENDING
  });
  axios
    .post("/persons", data)
    .then(response => {
      dispatch({
        type: POST_PEOPLE_SUCCESS
      }); 
    })
    .catch(error => {
      dispatch({
        type: POST_PEOPLE_FAIL,
        payload: error
      });
    });
};
