import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import iconLore from "./images/icon-lore.png";

import "./index.css";

import styles from "./styles.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className={styles.app}>
        <h1 className={styles.heading}>
          <img alt="Icon lore" className={styles.iconLore} src={iconLore} />
          Northgard Lore Planner
        </h1>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Stag/" />
          </Route>
          <Route exact path="/:clan/:hash?">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
