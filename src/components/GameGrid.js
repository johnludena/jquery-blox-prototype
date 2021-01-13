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
      blocksCompleted: false // empty block 'active' or 'on' class for successful submission
    }
  }

  componentDidUpdate = () => {

    let lessonData = this.props.lessonsReducer.lessons[this.lessonIndex]

    // play chime on successful submission only ONCE per lesson
    if (lessonData.lessonCompleted && this.state.audioFilePlayedOnce === false) {
      // this.audioFile.current.play();
      this.setState({
        audioFilePlayedOnce: true,
        blocksCompleted: true
      });
    }
  }

  render = () => {
    
    // CSS grid settings
    const numberOfRows = 9;
    const numberOfColumns = 9;
    const blocksNumber = numberOfRows * numberOfColumns;
    const blockSize = '65px';

    const gridStyle = {
      gridTemplateColumns: `repeat(${numberOfColumns}, ${blockSize})`,
      gridTemplateRows: `repeat(${numberOfRows}, ${blockSize})`,
      gap: '15px',
      padding: '15px',
    }

    let lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];

    // First we'll get all the visible blocks up to this lesson from our state obj and create a master object out of them
    // with the keys as the grid numbers where we'll show our block.
    let totalCurrentLessons = this.lessonIndex;
    let masterObj = {};

    for (let i = 0; i <= totalCurrentLessons; i++) {
      let lessonData = this.props.lessonsReducer.lessons[i];
      let currentObj = lessonData.blockElements;
      masterObj = {...masterObj, ...currentObj};
    }

    // Now we can start looping through a total amount of needed squares and as we do so, checking if their index
    // matches any of they keys in our master object. If so, we can apply the matching classes to the 'div' element
    // and push empty array that we'll render at the end.
    let divsArr = [];

    for (let i = 0; i < blocksNumber; i++) {

      if (masterObj[i]) {
        divsArr.push(<div className={`block ${masterObj[i]} ${lessonData.lessonCompleted ? 'on' : ''}`} key={i}></div>); 
      } else {
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
