// libs
import React from "react";
import GameGrid from './GameGrid';
import ChatBubble from './ChatBubble';
import ModalFeedback from './ModalFeedback';
import ModalSubscribe from './ModalSubscribe';

class RightCol extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="RightCol col">

        <GameGrid lessonKey={this.props.lessonKey} />
        <ModalFeedback />
        <ModalSubscribe />

        {/* <button onClick={this.openModal}>Open Modal</button> */}

        <ChatBubble />
      </div>
    );
  }
}

export default RightCol;


