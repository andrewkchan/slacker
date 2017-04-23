import React from "react";


/*
 * Banner component
 * Required props:
 * @messages    An array of string text messages.
 */
class Banner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let numMessages = this.props.messages.length;
        return (
            <div>
                <h2>Zuck Deluxe</h2>
                <p>
                    {`${numMessages} total messages in this conversation.`}
                </p>
            </div>
        );
    }
}

export default Banner;
