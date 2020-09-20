import React from "react";
// import { render } from "@testing-library/react";

import { Controlled as CodeMirror } from 'react-codemirror2'; // CodeMirror React wrapper

// CodeMirror CSS imports
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';


class CodeEditor extends React.Component {
  constructor(props) {
    super(props);

  }

  handleChange(codeType, payload) {
    console.log('handChange FN');
    console.log(codeType, payload);
    this.props.refreshCode(codeType, payload);
  }


  render() {
    const { html, js, css } = this.props.data;

    const codeMirrorOptions = {
        theme: 'material',
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
    };

    return (
      <div className="code-editor-wrapper">
        <section className="playground">
          <div className="code-editor html-code">
            <div className="editor-header">HTML</div>
            <CodeMirror
              value={html}
              options={{
                mode: "htmlmixed",
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, html) => {
                this.handleChange('html', html);
              }}
            />
          </div>
          <div className="code-editor css-code">
            <div className="editor-header">CSS</div>
            <CodeMirror
              value={css}
              options={{
                mode: "css",
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, css) => {
                this.handleChange('css', css);
              }}
            />
          </div>
          <div className="code-editor js-code">
            <div className="editor-header">JavaScript</div>
            <CodeMirror
              value={js}
              options={{
                mode: "javascript",
                ...codeMirrorOptions,
              }}
              onBeforeChange={(editor, data, js) => {
                this.handleChange('js', js);
              }}
            />
          </div>
        </section>
        
      </div>
    );
  }
}

export default CodeEditor;
