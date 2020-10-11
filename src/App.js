// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'

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

  componentDidMount = () => {
    window.addEventListener('message', this.catchIframeEvent);
  }

  catchIframeEvent = (e) => {
    let lessonStatus = JSON.parse(e.data);
  }

  updateUi = (codeType, payload, pageIndex) => {

    // console.log('current state', currentState);
    this.setState({
      ...lessonsArr[pageIndex][codeType] = payload,
    });
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
          <Route exact path='/'>
            <Redirect to='/1' />
          </Route>
          {routesArr}
        </Switch>
      </Router>
    );
  }
}

export default App;
