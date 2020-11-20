// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Controlled as CodeMirror } from "react-codemirror2"; // CodeMirror React wrapper

// CodeMirror CSS imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-ocean.css";
// import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";


class CodeEditor extends React.Component {
  constructor(props) {
    console.log('========= CodeEditor.js constructor ===========');
    super(props);

    this.lessonIndex = this.props.lessonKey;
  }

  componentDidUpdate = () => {
    console.log('========= CodeEditor.js componentDidUpdate ===========')
    this.setData();
  };

  setData = () => {
    console.log('========= CodeEditor.js setData ===========')
    // data vars
    this.lessonData = this.props.lessonsReducer.lessons[this.lessonIndex];
  };

  handleChange = (codeType, content) => {
    console.log('========= CodeEditor.js handleChange ===========')
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
    console.log('========= CodeEditor.js render ===========')
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
          <Link className="button" to={`/${this.props.lessonKey + 2}`}>
            Go to next challenge
          </Link>
        );
      }

      return;
    };

    return (
      <div className="CodeEditor">
        <div className="code-editor-wrapper">
          <div className="panel playground">
            <div className="code-editor js-code">
              <div className="editor-header">JavaScript</div>
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
            </div>
          </div>

          <div className="bottom-navigation">{showNextButton()}</div>
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
