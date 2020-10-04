import React from "react";
// import { render } from "@testing-library/react"; // not needed, delete after successful assertion testing

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Importing assertion + testing library for student's code validation
import { expect } from 'chai';

// CodeMirror React wrapper
import { Controlled as CodeMirror } from "react-codemirror2"; // CodeMirror React wrapper

// CodeMirror CSS imports
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

// TESTING

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(codeType, payload) {
    this.props.refreshCode(codeType, payload);
    
    if (codeType === 'js') {

      // let's access the DOM playing iframe
      let iframe = document.querySelector('iframe');

      // get the button node inside the iframe
      let innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document; 
      let currentScript = innerDoc.currentScript;

      let buttonNode = innerDoc.querySelector('button');
    }
  }

  render() {
    const { html, js, css } = this.props.data;

    const codeMirrorOptions = {
      theme: "material",
      lineNumbers: true,
      scrollbarStyle: null,
      lineWrapping: true,
    };

    return (
      <div className="left-col col">
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
                  this.handleChange("html", html);
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
                  this.handleChange("css", css);
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
                  this.handleChange("js", js);
                }}
              />
            </div>
          </section>

          <section className="bottom-navigation">
            <Link className="button" to="/about">
              Go to next challenge
            </Link>
          </section>
        </div>
        <div className="results">
          <div id="mocha"></div>
        </div>
      </div>
    );
  }
}

export default CodeEditor;
