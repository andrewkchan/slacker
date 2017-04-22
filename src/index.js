import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import './styles/main.scss';

const store = configureStore(undefined);

ReactDOM.render(
    <App />,
    document.getElementById("main")
);
