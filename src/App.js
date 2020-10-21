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

  componentDidMount = () => {
    window.addEventListener('message', this.catchIframeEvent);
  }

  catchIframeEvent = (event) => {

    console.log({event})

    // check to make sure messages being sent from other windows are not gonna interfere with our app
    // TODO: Switch to complex string to prevent issues
    if (!event.data.internalSignal) {
      return;
    }

    // check for source of event to make sure it's from our iframe window and nothing else
    let lessonStatusData = event.data;
    console.log({lessonStatusData});
    
    
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

