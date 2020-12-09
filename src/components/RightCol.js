// libs
import React from "react";
// import store from "../redux/store";
// import { connect } from "react-redux";

// components
import GameGrid from './GameGrid';

// assets
// import successSound from "../audio/success.wav";

class RightCol extends React.Component {

  render() {

    return (
      <div className="right-col col">
        <div className="grids-outter-wrapper">
            <GameGrid lessonKey={this.props.lessonKey} />
        </div>
      </div>
    );
  }
}

export default RightCol;


