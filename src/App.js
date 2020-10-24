// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// components
import GameGrid from "./components/GameGrid/GameGrid";
import CodeEditor from "./components/CodeEditor/CodeEditor";

// css
import "./App.scss";


class App extends React.Component {
  constructor() {
    super();
  }

  render = () => {

    let routesArr = this.props.lessonsReducer.lessons.map((lesson, index)=>{
      return (
        <Route path={`/${index + 1}`} key={index + 1}>
          <CodeEditor lessonKey={index}  />
          <GameGrid lessonKey={index} />
        </Route>
      )
    });

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/1' />
          </Route>
          {routesArr}
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { lessonsReducer } = state;
  return { lessonsReducer }
}

export default connect(mapStateToProps)(App)

