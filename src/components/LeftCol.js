// Libraries
import React from "react";

// Components
import Header from './Header';
import Testing from './Testing';
import TextPanel from './TextPanel';
import CodeEditor from './CodeEditor';

// Importing assertion + testing library for student's code validation
// import { expect } from 'chai';

class LeftCol extends React.Component {
  
  render = () => {

    return (
      <div className="LeftCol col">

        <Header />
        <Testing />
        <TextPanel />
        <CodeEditor lessonKey={this.props.lessonKey} />

      </div>
    );
  }
}

export default LeftCol;



