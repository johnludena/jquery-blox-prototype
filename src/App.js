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
    // this.state = {
    //   lessonsArr 
    // };
  }

  // componentDidMount = () => {
  //   window.addEventListener('message', this.catchIframeEvent);
  // }

  // catchIframeEvent = (e) => {
  //   let lessonStatus = JSON.parse(e.data);
  // }

  // updateUi = (codeType, payload, pageIndex) => {

  //   // console.log('current state', currentState);
  //   this.setState({
  //     ...lessonsArr[pageIndex][codeType] = payload,
  //   });
  // };

  render() {

    console.log('this.props', this.props)

    let routesArr = this.props.lessons.lessons.map((lesson, index)=>{
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

function mapStateToProps(state) {
  console.log('mapStateToProps state', state);
  const { lessons } = state;
  return { lessons }
}

export default connect(mapStateToProps)(App)

