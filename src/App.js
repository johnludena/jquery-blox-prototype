import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GameGrid from "./components/GameGrid";
import CodeEditor from "./components/CodeEditor";
import "./App.scss";

import lessons from './lessons/data';

console.log({lessons})

let startHtml = `<button class="block one">btn 1</button>
<button class="block two">btn 2</button>`;
let startCss = `button.one {
  grid-column-start: 3;
  grid-row-start: 3;
}`;
let startJs = `// create a node for the button element and assign it to a variable called 'purpleButton'
var buttonNode = document.querySelector('button.two')`;

function About() {
  return <h2>About Route</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      html: startHtml,
      css: startCss,
      js: startJs,
    };
  }

  updateUi = (codeType, payload) => {
    this.setState({
      [codeType]: payload,
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lesson/3">
            <Users />
          </Route>
          <Route path="/">
            <CodeEditor data={this.state} refreshCode={this.updateUi} />
            <GameGrid data={this.state} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
