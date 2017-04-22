import React from "react";
import Conversation from "../components/Conversation";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: "null", messages: ["hi", "job?"]};
    }
    render() {
        return (
            <div className="content">
                <Conversation messages={this.state.messages}/>
                <div className="message-input">
                    <input
                        className="message-input-input"
                        type="text"
                        onChange={(event)=> {
                            this.setState({text: event.target.value});
                            console.log(this.state.text);
                        }}
                        onKeyPress={(event)=>{
                            if (event.key == "Enter") {
                                this.setState({...this.state, messages: [...this.state.messages, this.state.text]});
                                event.target.value = "";
                            }
                        }} />
                </div>
            </div>
        );
    }
}

export default App;
