import React from "react";
import { connect } from "react-redux";

class ChatBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMessages: false,
    }
  }

  openMessages = () => {
    this.setState({
      displayMessages: !this.state.displayMessages,
    })
  }

  render = () => {

    // Test commit

    return (
        <div className="ChatBubble">
            <div className={`${this.state.displayMessages ? 'active' : ''} messages-wrapper`}>
              <ul>
                <li>Aenean sed adipiscing diam donec adipiscing tristique risus nec. Dolor morbi non arcu risus quis varius quam. </li>
                <li>Magnis dis parturient <a href="#">montes</a> nascetur.</li>
                <li>Nascetur ridiculus mus mauris vitae ultricies. Velit aliquet sagittis id consectetur purus ut. </li>
              </ul>
            </div>
            <div className={`${this.state.displayMessages ? 'active' : ''} chat-bubble-wrapper`}>
              <button onClick={this.openMessages} className="bubble"></button>
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
