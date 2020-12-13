// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { UnControlled as CodeMirror } from "react-codemirror2"; // CodeMirror React wrapper
// import chai from 'chai';

// CodeMirror CSS imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/mode/javascript/javascript";

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);

    this.lessonIndex = this.props.lessonKey;
  }

  componentDidUpdate = () => {
    this.setData();
  };

  setData = () => {
    this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  };

  handleCodeUpdates = (codeType, content) => {
    const lessonIndex = this.lessonIndex;
    // let jsCode = this.lessonData.js;
    let lessonSubmittedStatus = false;
    console.log('lessonSubmitted is FALSE');

    this.props.dispatch({
      type: 'CODE_UPDATED',
      payload: {
        codeType, content, lessonIndex
      }
    });

    this.props.dispatch({
      type: 'LESSON_SUBMITTED',
      payload: {
         lessonSubmittedStatus,
         lessonIndex,
      }
    });
  };

  handleCodeSubmission = () => {
    // let jsCode = this.lessonData.js;
    let lessonSubmittedStatus = true;
    let lessonIndex = this.lessonIndex;

    this.props.dispatch({
      type: 'LESSON_SUBMITTED',
      payload: {
         lessonSubmittedStatus,
         lessonIndex,
      }
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
      if (this.lessonData.lessonPassed) {
        return (
          <Link className="btn secondary-btn" to={`/${this.props.lessonKey + 2}`}>
            Go to next challenge
          </Link>
        );
      }

      return;
    };

    return (
      <div className="CodeEditor">
        <ul className="tabs">
          <li>Javascript</li>
        </ul>
        <CodeMirror
          value={js}
          options={{
            mode: "javascript",
            ...codeMirrorOptions,
          }}
          onChange={(editor, data, js) => {
            this.handleCodeUpdates("js", js);
          }}
        />

        <div className="flex justify-content-between bg-purple-pale padding-30">
          <button className="primary-btn btn" onClick={this.handleCodeSubmission}>Submit code</button>
          {showNextButton()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = function (state) {
  const { lessonsReducer } = state;
  return { lessonsReducer };
};

// export default CodeEditor;
export default connect(mapStateToProps)(CodeEditor);
