// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
    console.log('message event listener triggered!');
    console.log('event', e)
    let lessonStatus = JSON.parse(e.data);
    console.log('your data:', lessonStatus);
  }

  updateUi = (codeType, payload, pageIndex) => {

    // updated nested state property
    // let newState = [ ...this.state.lessonsArr ];
    // newState[pageIndex][codeType] = payload;

    // this.setState({newState});

    // Another way to do the same thing as above...
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
