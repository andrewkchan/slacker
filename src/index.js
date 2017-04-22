import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Message from "./components/Message";
import Conversation from "./components/Conversation";
import './styles/main.scss';

ReactDOM.render(
    <Conversation />,
    document.getElementById("main")
);
