import React, { Component } from 'react'; //all Components files need to have this line included
// import './App.css';
import Home from './Components/Home';
import Saved from './Components/Saved';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="Home">New York Times Article Scrapper</h1> */}
          {/* this is to call the Home component */}
          <Home />
          <Saved />
        </header>
        
      </div>
    );
  }
}

export default App;
