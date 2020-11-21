// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Controlled as CodeMirror } from "react-codemirror2"; // CodeMirror React wrapper

// CodeMirror CSS imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
// import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

class CodeEditor extends React.Component {
  constructor(props) {
    console.log("========= CodeEditor.js constructor ===========");
    super(props);

    this.lessonIndex = this.props.lessonKey;
  }

  componentDidUpdate = () => {
    console.log("========= CodeEditor.js componentDidUpdate ===========");
    this.setData();
  };

  setData = () => {
    console.log("========= CodeEditor.js setData ===========");
    // data vars
    this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  };

  handleChange = (codeType, content) => {
    console.log("========= CodeEditor.js handleChange ===========");
    const lessonIndex = this.lessonIndex;

    this.props.dispatch({
      type: "CODE_UPDATED",
      payload: {
        codeType,
        content,
        lessonIndex,
      },
    });
  };

  render() {
    console.log("========= CodeEditor.js render ===========");
    this.setData();

    const { html, js, css } = this.lessonData;

    const codeMirrorOptions = {
      theme: "material-ocean",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    const showNextButton = () => {
      if (this.lessonData.lessonPassed) {
        return (
          <Link className="primary-btn" to={`/${this.props.lessonKey + 2}`}>
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
          onBeforeChange={(editor, data, js) => {
            this.handleChange("js", js);
          }}
        />

        <div className="d-flex justify-content-end bg-purple-pale padding-30">
          <button className="primary-btn" onClick={this.onSubmitCode}>Submit code</button>
        </div>

        <div className="bottom-navigation">{showNextButton()}</div>
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
