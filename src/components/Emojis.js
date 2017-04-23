import React from "react";

class Emojis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sadParrot: 0,
            parrot: 0,
            hug: 0,
            showMenu: false
        };
    }
    renderEmojiButton(type, imgSrc) {
        return (
            <div
                className="emojis-button"
                onClick={() => { this.setState({ [type]: this.state[type] - 1 }); }}
            >
                <img className="emojis-img" src={imgSrc} />
                {this.state[type]}
            </div>
        );
    }
    renderMenu() {
        if (this.state.showMenu) {
            return (
                <div className="emojis-menu">
                    <div className="emojis-menu-add" onClick={() => {
                        this.setState({ sadParrot: this.state.sadParrot + 1 });
                    }}>
                        <img className="emojis-img" src="/img/sadparrot.gif" />
                    </div>
                    <div className="emojis-menu-add" onClick={() => {
                        this.setState({ parrot: this.state.parrot + 1 });
                    }}>
                        <img className="emojis-img" src="/img/parrot.gif" />
                    </div>
                    <div className="emojis-menu-add" onClick={() => {
                        this.setState({ hug: this.state.hug + 1 });
                    }}>
                        <img className="emojis-img" src="/img/hug.jpg" />
                    </div>
                </div>
            );
        }
        return null;
    }
    render() {
        let emojis = Object.keys(this.state).reduce((acc, emojiType) => {
            if (this.state[emojiType] > 0) {
                switch(emojiType) {
                    case "sadParrot":
                        return [...acc, this.renderEmojiButton("sadParrot", "/img/sadparrot.gif")];
                    case "parrot":
                        return [...acc, this.renderEmojiButton("parrot", "/img/parrot.gif")];
                    case "hug":
                        return [...acc, this.renderEmojiButton("hug", "/img/hug.jpg")];
                    default:
                        return acc;
                }
            }
            return acc;
        }, []);
        return (
            <div className="emojis">
                <div className="emojis-active">
                    {emojis}
                </div>
                <div className="emojis-button emojis-add" onClick={() => { this.setState({showMenu: !this.state.showMenu}); }}>
                    <span>+</span><i className="icon ion-android-happy" />
                    {this.renderMenu()}
                </div>

            </div>
        );
    }
}

export default Emojis;
