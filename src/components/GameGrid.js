// libs
import React from "react";

// redux
import { connect } from "react-redux";

// assets
import successSound from "../audio/success.wav";

class GameGrid extends React.Component {
  constructor(props) {
    console.log("========= GameGrid.js constructor ==========");
    super(props);

    this.audioFile = React.createRef();
    this.lessonIndex = this.props.lessonKey;
  }

  render() {

    console.log("======== GameGrid.js render ==========");
    
    // CSS grid settings
    const numberOfRows = 12;
    const numberOfColumns = 10;
    const blocksNumber = numberOfRows * numberOfColumns;
    const blockSize = '65px';

    const gridStyle = {
      gridTemplateColumns: `repeat(${numberOfColumns}, ${blockSize})`,
      gridTemplateRows: `repeat(${numberOfRows}, ${blockSize})`,
      gap: '15px',
      padding: '15px',
    }

    let divsArr = [];

    let lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];

    for (let i = 0; i < blocksNumber; i++) {
      
      if (i === lessonData.blockElements[0].blockPosition) {
        divsArr.push(<div className="block button" key={i}></div>);
      }
      else {
        divsArr.push(<div key={i}></div>);
      }
    }

    return (
      <div className="GameGrid">
        <div className="grid" style={gridStyle}>{divsArr}</div>

        <audio src={successSound} ref={this.audioFile}></audio>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lessonsReducer } = state; // get 'lessons' array from state
  return { lessonsReducer };
}

export default connect(mapStateToProps)(GameGrid);
