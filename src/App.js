import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GameGrid from "./components/GameGrid";
import CodeEditor from "./components/CodeEditor";
import "./App.scss";

import lessonsArr from './lessons/data';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lessonsArr 
    };
  }

  updateUi = (codeType, payload) => {
    this.setState({
      [codeType]: payload,
    });
  };

  render() {

    console.log('App > this.state', this.state)

    let routesArr = lessonsArr.map((lesson, index)=>{
      return (
        <Route path={`/${index + 1}`} key={index + 1}>
          <CodeEditor data={this.state.lessonsArr[index]} refreshCode={this.updateUi} />
          <GameGrid data={this.state.lessonsArr[index]} />
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
