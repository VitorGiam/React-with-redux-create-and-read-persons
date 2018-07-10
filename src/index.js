import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import axios from "axios";

import SimpleForm from "./components/SimpleForm";
import PersonList from "./components/PersonList";
import configuration from "./configuration";

axios.defaults.headers.post["Content-Type"] = configuration.ContentType;
axios.defaults.baseURL = configuration.baseUri;

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={configureStore()}>
    <div style={{ padding: 15 }}>
      <h1 style={{ textAlign: "center" }}>Simple form</h1>
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
