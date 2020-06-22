import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1";
import App7 from "./App7";
import App4 from "./App4";
import App5 from "./App5";
import App3 from "./App3";
import * as serviceWorker from "./serviceWorker";
import Header from "./Header";
import Main from "./Main.js";
import Admin from "./Admin.js";
import "bootstrap/dist/css/bootstrap.css";
ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
