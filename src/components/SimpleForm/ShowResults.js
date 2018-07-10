import React from "react";
import axios from "axios";

import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  const data = JSON.stringify(values, 0, 4);
  await sleep(300);

  axios
    .post("/persons", data)
    .then(function(response) {})
    .catch(function(error) {});
});
