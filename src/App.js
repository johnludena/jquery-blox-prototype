// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// components
import GameGrid from "./components/GameGrid/GameGrid";
import CodeEditor from "./components/CodeEditor/CodeEditor";

// css
import "./App.scss";

// app data
import lessonsArr from './lessons/data';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lessonsArr 
    };
  }

  updateUi = (codeType, payload, pageIndex) => {

    // updated nested state property
    let newState = [ ...this.state.lessonsArr ];
    newState[pageIndex][codeType] = payload;

    console.log('newState', newState)

    this.setState({newState});

    // console.log('current state', currentState);
    // this.setState({
    //   ...lessonsArr[pageIndex][codeType] = payload,
    // });
  };

  render() {

    let routesArr = this.state.lessonsArr.map((lesson, index)=>{
      return (
        <Route path={`/${index + 1}`} key={index + 1}>
          <CodeEditor data={lesson} refreshCode={this.updateUi} lessonKey={index}  />
          <GameGrid data={lesson} />
        </Route>
      )
    });

    return (
      <Router>
        <Switch>
          {routesArr}
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/lesson/3">
            <Users />
          </Route>
          <Route path="/">
            <CodeEditor data={this.state} refreshCode={this.updateUi} />
            <GameGrid data={this.state} />
          </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
