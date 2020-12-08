// Libraries
import React from "react";

// Components
import Header from './Header';
import Validator from './Validator';
import ValidatorIframe from './ValidatorIframe';
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
        <Validator lessonKey={this.props.lessonKey} />
        {/* <ValidatorIframe lessonKey={this.props.lessonKey} /> */}

      </div>
    );
  }
}

export default LeftCol;



