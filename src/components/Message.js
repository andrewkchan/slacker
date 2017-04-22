import React from "react";
import Emojis from "../components/Emojis";

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="message">
                <div className="message-thumbnail">
                </div>
                <div className="message-info-section">
                    <p>{this.props.text}</p>
                    <Emojis />
                </div>

            </div>
        );
    }
}

export default Message;
