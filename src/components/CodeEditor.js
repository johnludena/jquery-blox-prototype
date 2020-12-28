// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2"; // CodeMirror React wrapper
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


// App Components
import Validator from "./Validator";

// CodeMirror CSS imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/mode/javascript/javascript";

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);

    this.lessonIndex = this.props.lessonKey;
    this.editorTab = React.createRef();
    this.resultsTab = React.createRef();
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate')
    this.setData();
  };

  setData = () => {
    this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  };

  handleCodeUpdates = (codeType, content) => {
    let lessonIndex = this.lessonIndex;

    this.props.dispatch({
      type: "CODE_UPDATED",
      payload: {
        codeType,
        content,
        lessonIndex,
      },
    });

    // reset submission status on code change to keep validating user's code in case they want to keep
    // playing around with different other options after their first successful submission
    let lessonPassedStatus = false;

    this.props.dispatch({
      type: "LESSON_PASSED",
      payload: {
        lessonPassedStatus,
        lessonIndex,
      },
    });

    // if lesson data has been submitted already, reset it to prevent constant re-rendering of component
    // and avoid flickering of iframe 
    if (this.lessonData.lessonSubmitted) {
      let lessonSubmittedStatus = false;
      this.props.dispatch({
        type: "LESSON_SUBMITTED",
        payload: {
          lessonSubmittedStatus,
          lessonIndex,
        },
      });
      
    }
  };

  handleCodeSubmission = () => {
    let lessonIndex = this.lessonIndex;
    let lessonSubmittedStatus = true;

    this.props.dispatch({
      type: "LESSON_SUBMITTED",
      payload: {
        lessonSubmittedStatus,
        lessonIndex,
      },
    });
  };

  render = () => {
    this.setData();

    const { js } = this.lessonData;

    const codeMirrorOptions = {
      theme: "material-ocean",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    const showNextButton = () => {
      if (this.lessonData.lessonCompleted) {
        return (
          <Link
            className="btn secondary-btn"
            to={`/${this.props.lessonKey + 2}`}
          >
            Go to next challenge
          </Link>
        );
      }

      return;
    };

    const showResultsIcon = () => {
      if (this.lessonData.lessonSubmitted && this.lessonData.lessonPassed) {
        return <FontAwesomeIcon icon={faCheckCircle} />;
      } else if (this.lessonData.lessonSubmitted && !this.lessonData.lessonPassed) {
        return <FontAwesomeIcon icon={faTimesCircle} />;
      } else {
        return '';
      }
    }

    return (
      <div className="CodeEditor">
        <Tabs forceRenderTabPanel={true}>
          <TabList>
            <Tab>Javascript</Tab>
            <Tab>{showResultsIcon()} View Results</Tab>
          </TabList>

          <TabPanel>
            <CodeMirror
              value={js}
              options={{
                mode: "javascript",
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, value) => {
                this.handleCodeUpdates("js", value);
              }}
            />

            <div className="flex justify-content-between bg-purple-pale padding-30">
              <button className="primary-btn btn" onClick={this.handleCodeSubmission}>
                Submit code
              </button>
              {showNextButton()}
            </div>
          </TabPanel>
          <TabPanel>
            <Validator lessonKey={this.props.lessonKey} />
          </TabPanel>
        </Tabs>
      </div>
    );
  };
}

const mapStateToProps = function (state) {
  const { lessonsReducer } = state;
  return { lessonsReducer };
};

// export default CodeEditor;
export default connect(mapStateToProps)(CodeEditor);
