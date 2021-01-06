import React from "react";
import { connect } from "react-redux";

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {

    return (
        <div className="ChatBubble">
            <div className="messages-wrapper">
              <ul>
                <li>Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dolor morbi non arcu risus quis varius quam. </li>
                <li>Magnis dis parturient montes nascetur.</li>
                <li>Nascetur ridiculus mus mauris vitae ultricies. Velit aliquet sagittis id consectetur purus ut. </li>
              </ul>
            </div>
            <div className="chat-bubble-wrapper">
              <div className="bubble"></div>
              <span className="alerts">2</span>
            </div>
        </div>
    );
  };
}

const mapStateToProps = (state) => {
    const { lessons } = state.lessonsReducer;
    return { lessons }
}

export default connect(mapStateToProps)(ChatBubble);
