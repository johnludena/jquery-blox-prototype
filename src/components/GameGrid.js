import React from "react";
import { connect } from "react-redux";

// assets
import successSound from "../audio/success.wav";

class GameGrid extends React.Component {
  constructor(props) {
    super(props);

    this.audioFile = React.createRef();
    this.lessonIndex = this.props.lessonKey;

    this.state = {
      blocksCompleted: false // empty block 'active' or 'on' class for successful submission
    }
  }

  componentDidUpdate = () => {

    let lessonData = this.props.lessonsReducer.lessons[this.lessonIndex]

    // play chime on successful completion only ONCE per lesson
    if (lessonData.lessonCompleted === false && lessonData.lessonPassed) {
      this.audioFile.current.play();
    }
  }

  render = () => {
    
    // CSS grid settings
    const numberOfRows = 14;
    const numberOfColumns = 9;
    const blocksNumber = numberOfRows * numberOfColumns;
    const blockSize = '65px';

    const gridStyle = {
      gridTemplateColumns: `repeat(${numberOfColumns}, ${blockSize})`,
      gridTemplateRows: `repeat(${numberOfRows}, ${blockSize})`,
      gap: '15px',
      padding: '0px', // 15px?
    }

    let totalCurrentLessons = this.lessonIndex;
    let divsArr = [];

    // Loop through the required number of blocks to render...
    for (let i = 0; i < blocksNumber; i++) {

      // set an intitial flag
      let foundMatchingBlock = false;

      // second loop through all the current lessons up to this point
      for (let y = 0; y <= totalCurrentLessons; y++) {
        let lessonData = this.props.lessonsReducer.lessons[y];

        // if key exists in master state data object, we apply those block classes and switch flag to skip empty block render
        if (lessonData.blockElements[i]) {
          divsArr.push(<div className={`block ${lessonData.blockElements[i]} ${lessonData.lessonCompleted ? 'on' : ''}`} key={i}></div>); 
          foundMatchingBlock = true;
        } 
      }

      // if no match is found in state object, we simply render an empty block
      if (!foundMatchingBlock) {
        divsArr.push(<div className="block" key={i}></div>); 
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
