import { Component } from 'react';
import './App.css';
import Login from './Login';
import TimeLine from './TimeLine';

/*
  component hierarchy:
  -App
      -Login
      -TimeLine
          -StatusUpdater
          -TimeLineItem
*/

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false }
    this.logInToApp = this.logInToApp.bind(this);
  }

  logInToApp() {
    this.setState({loggedIn: true});
  }  

  render() {
    return (
      <div className="App">
        { 
          this.state.loggedIn === true ? 
            <TimeLine></TimeLine> : 
            <Login loginFx={this.logInToApp}></Login> 
        }       
      </div>
    );
  }
}
export default App;