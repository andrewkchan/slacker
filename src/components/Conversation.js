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
                    {this.props.messages.map((message) => {
                      return <li><Message text={message}/></li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Conversation;
