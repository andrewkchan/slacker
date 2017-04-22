import React from "react";

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
                    <p>This is a message</p>
                </div>
            </div>
        );
    }
}

export default Message;
