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
              <a href="#" role="button" onClick={this.openFeedbackModal}>
              I'd love to hear your feedback!
              </a>{" "}
              It would help me a <em>lot</em> to make it even better in the future.{" "}
            </li>
            <li>
              Also, if you'd like to hear about the <em>next</em> version of jQueryBlox,{" "}
              <a href="#" role="button" onClick={this.openSubscribeModal}>
                you can subscribe here
              </a>{" "}
              and I'll send you updates on its progress and when it's ready!
            </li>
            <li>
              PS - Just want to say hi? You can get in touch with me <a href="mailto:johnludena@gmail.com">here</a> and <a target="_blank" href="https://www.linkedin.com/in/john-ludena/">here</a>.
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
