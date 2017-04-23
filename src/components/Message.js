import React from "react";
import MessageMenu from "../components/MessageMenu";

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
                    <MessageMenu />
                </div>

            </div>
        );
    }
}

export default Message;
