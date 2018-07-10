import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
// import showResults from "./components/SimpleForm/ShowResults";
import SimpleForm from "./components/SimpleForm";
import PersonList from "./components/PersonList";

import configuration from "./configuration";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = configuration.ContentType;
axios.defaults.baseURL = configuration.baseUri;

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={configureStore()}>
    <div style={{ padding: 15 }}>
      <h2 style={{ padding: 15 }}>Simple Form</h2>
      <SimpleForm
        form="personForm"
        handleSubmit={e => {
          e.preventDefault();
          console.log(e.target);
        }}
      />
      <PersonList form="list" />
    </div>
  </Provider>,
  rootEl
);
