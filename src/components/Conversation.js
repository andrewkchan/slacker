import React from "react";
import Message from "../components/Message";

class Conversation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Message /></li>
                    <li><Message /></li>
                    <li><Message /></li>
                    <li><Message /></li>
                    <li><Message /></li>
                </ul>
            </div>
        );
    }
}

export default Conversation;
