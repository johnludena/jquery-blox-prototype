// Libraries
import React from "react";

// Components
import Header from './Header';
import TextPanel from './TextPanel';
import CodeEditor from './CodeEditor';


class LeftCol extends React.Component {
  
  render = () => {

    return (
      <div className="LeftCol col">

        <Header />
        <TextPanel lessonKey={this.props.lessonKey} />
        <CodeEditor lessonKey={this.props.lessonKey} />

      </div>
    );
  }
}

export default LeftCol;



