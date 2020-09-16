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
  constructor() {
    super();
    this.iframe = React.createRef(); // iframe node (new React refs format)

    this.state = {
      html: `<button>click me</button>`,
      css: `button {
        padding: 10px 20px;
      background: blue;
      color: white;
    }

    button.active {
        background: red;
    }
      `,
      js: `let button = document.querySelector('button');
    button.addEventListener('click', ()=> {
    button.classList.toggle('active');
});`,
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    
    // trigger an update when user adds new code
    this.runCode();
  }

  componentDidMount() {
      console.log('componentDidMount')

    // initial load
    this.runCode();
  }

  runCode = () => {
    const { html, css, js } = this.state;

    const iframe = this.iframe.current;
    const document = iframe.contentDocument;

    console.log(document)
    const documentContents = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}

        <script type="text/javascript">
          ${js}
        </script>
      </body>
      </html>
    `;

    document.open();
    document.write(documentContents);
    document.close();
  };

  render() {
    const { html, js, css } = this.state;

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
                this.setState({ html });
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
                this.setState({ css });
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
                console.log({editor, data, js})
                this.setState({ js });
              }}
            />
          </div>
        </section>
        <section className="result">
          <iframe title="result" className="iframe" ref={this.iframe} />
        </section>
      </div>
    );
  }
}

export default CodeEditor;
