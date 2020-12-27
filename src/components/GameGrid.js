// libs
import React from "react";

// redux
import { connect } from "react-redux";

// assets
import successSound from "../audio/success.wav";

class GameGrid extends React.Component {
  constructor(props) {
    super(props);

    this.audioFile = React.createRef();
    this.lessonIndex = this.props.lessonKey;

    this.state = {
      audioFilePlayedOnce: false,
      blockOnClass: '' // empty block 'active' or 'on' class for successful submission
    }
  }

  componentDidUpdate = () => {

    let lessonData = this.props.lessonsReducer.lessons[this.lessonIndex]

    // play chime on successful submission only ONCE per lesson
    if (lessonData.lessonPassed && !this.state.audioFilePlayedOnce) {
      this.audioFile.current.play();
      this.setState({
        audioFilePlayedOnce: true,
        blockOnClass: 'on'
      });
    }
  }

  render = () => {
    
    // CSS grid settings
    const numberOfRows = 10;
    const numberOfColumns = 9;
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

    // loop through all blocks to render complete grid (using 'labels')
    for (let i = 0; i < blocksNumber; i++) {


      let foundMatch = false;

      // check for which blocks need to be set to active or completed in another loop
      for (let y = 0; y < lessonData.blockElements.length; y++) {

        let currentBlockElement = lessonData.blockElements[y]

        // if we find a match, break out of inner loop
        if (currentBlockElement.blockPosition === i) {
          let blockClasses = lessonData.blockElements[y].blockClasses;
          divsArr.push(<div className={`block ${blockClasses} ${this.state.blockOnClass}`} key={i}></div>);
          foundMatch = true;
        } 
      }

      // only render empty block if no match was found
      if (!foundMatch) {
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
