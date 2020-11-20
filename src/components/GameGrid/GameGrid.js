// libs
import React from "react";

// redux
import store from "../../redux/store";
import { connect } from "react-redux";

// assets
import successSound from "../../audio/success.wav";

class GameGrid extends React.Component {
  constructor(props) {
    console.log('============== constructor ============')
    super(props);

    // vars
    this.iframe = React.createRef(); // iframe node (new React 'refs' format)
    this.audioFile = React.createRef();
    this.lessonIndex = this.props.lessonKey;

  }

  componentDidMount = () => {
    // console.log("===== componentDidMount =======");

    this.setData();
    this.displayGameGrid();

    window.addEventListener("message", this.catchIframeEvent);
  };

  setData = () => {

    // console.log('========= setData ===============')

    // data vars
    this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  }

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

    this.setData();
    this.displayGameGrid();
  };

  

  catchIframeEvent = (event) => {
    
    // check to make sure messages being sent from other windows are not gonna interfere with our app
    // TODO: Switch to complex string to prevent issues
    if (!event.data.internalSignal) {
      return;
    }

    console.log('=========== catchIFrameEvent ==============')

    // TODO: Rename these variables to something else, getting a bit confusing...
    let iframeData = event.data;

    // PASS
    if (iframeData.validated) {
      // alert(iframeData.message);
      this.correctSubmission();
    
    // FAIL
    } else {
      // alert(iframeData.message);
      this.incorrectSubmission();
    }
  };

  correctSubmission = () => {
    console.log("======== correctSubmission ==========");
    console.log("PASS");

    let lessonIndex = this.lessonIndex;
    let lessonPassedStatus = true;

    this.props.dispatch({
      type: 'LESSON_PASSED',
      payload: {
        lessonPassedStatus, lessonIndex
      }
    });

    this.audioFile.current.play();

  };

  incorrectSubmission = () => {
    console.log(" ========== incorrectSubmission ============");

    console.log("FAIL");

    let lessonIndex = this.lessonIndex;
    let lessonSubmittedStatus = false

    // reset lesson submitted status if incorrect
    this.props.dispatch({
      type: 'LESSON_SUBMITTED',
      payload: {
        lessonSubmittedStatus, lessonIndex
      }
    });
  };

  onSubmitCode = () => {
    console.log("===== onSubmitCode =======");

    let lessonIndex = this.lessonIndex;
    let lessonSubmittedStatus = true;

    this.props.dispatch({
      type: 'LESSON_SUBMITTED',
      payload: {
        lessonSubmittedStatus, lessonIndex
      }
    });

  };

  // DEV NOTES: Destroy HTML/CSS code editors!
  // NEW BRANCH - v2

  displayGameGrid = () => {
    // console.log("===== displayGameGrid =======");
    const { html, css, js, js_validation } = this.lessonData;

    const iframe = this.iframe.current;
    const document = iframe.contentDocument;

    const userScriptCode = `<script type="text/javascript">${js}</script>`;
    const validationScriptCode = `<script type="text/javascript">${js_validation}</script>`;


    const documentContents = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your Awesome Game!</title>
        <link rel="stylesheet" href="${
          process.env.PUBLIC_URL + "/GameBlocks.css"
        }">
        <style>
          ${css}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript" src="${process.env.PUBLIC_URL + "/jquery-3.5.1.min.js"}"></script>

        ${this.lessonData.lessonSubmitted ? userScriptCode : ""}

        ${this.lessonData.lessonSubmitted ? validationScriptCode : ""}

      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    const blocksNumber = 50;
    let divsArr = [];

    for (let i = 0; i < blocksNumber; i++) {
      divsArr.push(<div key={i}></div>);
    }

    return (
      <div className="right-col col">
        <div className="grids-outter-wrapper">
          <div id="GameGrid">{divsArr}</div>

          <div id="iFrameWrapper">
            <iframe
              title="Okama Game Sphere"
              name="GameGridIframe"
              id="mySpecialId"
              className="iframe"
              ref={this.iframe}
            />

            <audio src={successSound} ref={this.audioFile}></audio>
          </div>
        </div>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={this.onSubmitCode}
            className="button"
            style={{
              backgroundColor: "blue",
              fontSize: 20,
              color: "white",
              padding: 20,
            }}
          >
            Submit code
          </button>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lessonsReducer } = state; // get 'lessons' array from state
  return { lessonsReducer };
}

export default connect(mapStateToProps)(GameGrid);


