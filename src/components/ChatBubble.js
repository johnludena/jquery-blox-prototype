import React from "react";
import { connect } from "react-redux";

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessages: false,
      notifications: 2,
    };
  }

  openMessages = () => {
    this.setState({
      displayMessages: !this.state.displayMessages,
      notifications: 0,
    });
  };

  openSubscribeModal = () => {
    this.props.dispatch({
      type: "TOGGLE_SUBSCRIBE_MODAL",
      payload: {
        isVisible: true,
      },
    });
  };

  openFeedbackModal = () => {
    this.props.dispatch({
      type: "TOGGLE_FEEDBACK_MODAL",
      payload: {
        isVisible: true,
      },
    });
  };

  render = () => {

    const notificationsCircle = () => {
      if (this.state.notifications > 0) {
        return  <span className="alerts">{this.state.notifications}</span>;
      }

      return;
    }

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
          {notificationsCircle()}
        </div>
      </div>
    );
  };
}

// const mapStateToProps = (state) => {
//   const { isVisible } = state.modalsReducer;
//   return { isVisible };
// };

export default connect()(ChatBubble);
