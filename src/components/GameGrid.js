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

    // vars
    // this.iframe = React.createRef(); // iframe node (new React 'refs' format)
    this.audioFile = React.createRef();
    this.lessonIndex = this.props.lessonKey;
  }

  componentDidMount = () => {
    // console.log("===== componentDidMount =======");

    // this.setData();
    // this.displayGameGrid();

    // window.addEventListener("message", this.catchIframeEvent);
  };

  setData = () => {
    // console.log('========= setData ===============')

    // get data from store and store it as object for this lesson
    // this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  };

  shouldComponentUpdate = () => {
    console.log("======= shouldComponentUpdate =========");
    // if lesson hasn't been passed yet, keep updating the component
    if (!this.lessonData.lessonPassed) {
      return true;
    }

    // otherwise exit to prevent an infinite loop
    return false;
  };

  componentDidUpdate = () => {
    console.log("===== componentDidUpdate =======");

    // this.setData();
    // this.displayGameGrid();
  };

  // catchIframeEvent = (event) => {
  //   // check to make sure messages being sent from other windows are not gonna interfere with our app
  //   // TODO: Switch to complex string to prevent issues
  //   if (!event.data.internalSignal || this.lessonData.lessonPassed) {
  //     return;
  //   }

  //   console.log("=========== catchIFrameEvent ==============");

  //   // TODO: Rename these variables to something else, getting a bit confusing...
  //   let iframeData = event.data;

  //   // PASS
  //   if (iframeData.validated) {
  //     // alert(iframeData.message);
  //     this.correctSubmission();

  //     // FAIL
  //   } else {
  //     // alert(iframeData.message);
  //     this.incorrectSubmission();
  //   }
  // };

  correctSubmission = () => {
    console.log("======== correctSubmission ==========");
    console.log("PASS");

    let lessonIndex = this.lessonIndex;
    let lessonPassedStatus = true;

    this.props.dispatch({
      type: "LESSON_PASSED",
      payload: {
        lessonPassedStatus,
        lessonIndex,
      },
    });

    this.audioFile.current.play();
  };

  incorrectSubmission = () => {
    console.log(" ========== incorrectSubmission ============");

    console.log("FAIL");

    let lessonIndex = this.lessonIndex;
    let lessonSubmittedStatus = false;

    // reset lesson submitted status if incorrect
    this.props.dispatch({
      type: "LESSON_SUBMITTED",
      payload: {
        lessonSubmittedStatus,
        lessonIndex,
      },
    });
  };


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
    console.log('data before loop...', lessonData)

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
