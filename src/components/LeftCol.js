// Libraries
import React from "react";

// Components
import Header from './Header';
import Validator from './Validator';
import TextPanel from './TextPanel';
import CodeEditor from './CodeEditor';

// Importing assertion + testing library for student's code validation
// import { expect } from 'chai';

class LeftCol extends React.Component {
  
  render = () => {

    return (
      <div className="LeftCol col">

        <Header />
        <TextPanel />
        <CodeEditor lessonKey={this.props.lessonKey} />
        <Validator />

      </div>
    );
  }
}

export default LeftCol;



