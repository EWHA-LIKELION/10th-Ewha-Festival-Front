import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.css";
import "./styles/common.scss";
import "./styles/pin.css";
import "./styles/button.css";
import { BrowserRouter as Router } from "react-router-dom";

// 구글 애널리틱스
import ReactGA from "react-ga";
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
ReactGA.initialize("UA-240663691-1");

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "./redux/store";

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </Router>,
);
