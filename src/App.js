import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GameGrid from "./components/GameGrid";
import CodeEditor from "./components/CodeEditor";
import "./App.scss";

let startHtml = `<button class="block">btn</button>
<div class="block">div</div>
<p class="block">p</p>
<a class="block">a</a>
<img class="block" src="https://picsum.photos/125/125" />
<ul>
  <li class="block">li 1</li>
  <li class="block">li 2</li>
  <li class="block">li 3</li>
</ul>
`;
let startCss = `button {
  grid-column-start: 3;
  grid-row-start: 3;
}
ul {
  grid-column-start: 2;
  grid-row-start: 4;
  grid-column-end: 5;
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
ul li.block {
  flex: 1;
  max-width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
}`;
let startJs = ``;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
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
