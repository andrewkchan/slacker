import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="message">
                <p>This is a message</p>
            </div>
        );
    }
}

export default Message;
