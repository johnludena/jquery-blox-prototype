import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessages: false,
      notifications: 4,
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
        return <span className="alerts">{this.state.notifications}</span>;
      }

      return;
    };

    return (
      <div className="ChatBubble">
        <div
          className={`${
            this.state.displayMessages ? "active" : ""
          } messages-wrapper`}>
          <ul>
            <li>Hey there! Thanks for checking out jQueryBlox 🙌</li>
            <li>
              If you have 60 seconds,
              <a href="#" onClick={this.openSubscribeModal}>
                I'd love to know what you think of it.
              </a>{" "}
              It would help me a LOT to make it even better.{" "}
            </li>
            <li>
              Also, if you'd like to hear about the NEXT version of jQueryBlox,{" "}
              <a href="#" onClick={this.openFeedbackModal}>
                you can join my mailing list
              </a>{" "}
              and I'll send you updates on its progress.
            </li>
            <li>
              PS - You can get in touch with me <a href="mailto: johnludena@gmail.com">here</a> and <a target="_blank" href="https://www.linkedin.com/in/john-ludena/">here</a>.
            </li>
          </ul>
        </div>
        <div
          className={`${
            this.state.displayMessages ? "active" : ""
          } chat-bubble-wrapper`}>
          <button onClick={this.openMessages} className="bubble"><FontAwesomeIcon icon={faEnvelopeOpenText} /></button>
          {notificationsCircle()}
        </div>
      </div>
    );
  };
}

export default connect()(ChatBubble);
