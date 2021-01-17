import React from "react";
import { connect } from "react-redux";

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessages: false,
    };
  }

  openMessages = () => {
    this.setState({
      displayMessages: !this.state.displayMessages,
    });
  };

  openSubscribeModal = () => {
    this.props.dispatch({
      type: "TOGGLE_SUBSCRIBE_MODAL",
      isVisible: true,
    });
  };

  openFeedbackModal = () => {
    console.log("openFeedbackModal link click");
  };

  render = () => {
    return (
      <div className="ChatBubble">
        <div
          className={`${
            this.state.displayMessages ? "active" : ""
          } messages-wrapper`}
        >
          <ul>
            <li>
              Aenean sed adipiscing diam donec adipiscing tristique risus nec.
              Dolor morbi non arcu risus quis varius quam.{" "}
            </li>
            <li>
              Magnis dis parturient{" "}
              <a href="#" onClick={this.openSubscribeModal}>
                subscribe
              </a>{" "}
              nascetur.
            </li>
            <li>
              Nascetur ridiculus mus mauris vitae ultricies. Velit{" "}
              <a href="#" onClick={this.openFeedbackModal}>
                submit feedback
              </a>{" "}
              id consectetur purus ut.{" "}
            </li>
          </ul>
        </div>
        <div
          className={`${
            this.state.displayMessages ? "active" : ""
          } chat-bubble-wrapper`}
        >
          <button onClick={this.openMessages} className="bubble"></button>
          <span className="alerts">2</span>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  const { isVisible } = state.modalsReducer;
  return { isVisible };
};

export default connect(mapStateToProps)(ChatBubble);
